
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { initialServices } from '@/data/services';

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const mapFromDb = useCallback((s) => {
        if (!s) return null;
        return {
            ...s,
            id: s.id,
            serviceType: s.service_type || s.serviceType || '',
            price: Number(s.price) || 0,
            unit: s.unit || '',
            qty: Number(s.qty) || 1,
            createdAt: s.created_at || new Date().toISOString()
        };
    }, []);

    const mapToDb = useCallback((s) => ({
        id: s.id,
        service_type: s.serviceType,
        price: s.price,
        unit: s.unit,
        qty: s.qty
    }), []);

    const fetchServices = useCallback(async () => {
        try {
            const { data, error } = await supabase
                .from('services')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) {
                console.warn("Supabase fetch error (services):", error.message);
                const stored = localStorage.getItem('services');
                if (stored) {
                    try {
                        const parsed = JSON.parse(stored);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            setServices(parsed);
                            return;
                        }
                    } catch (e) { }
                }
                if (services.length === 0) setServices(initialServices);
                return;
            }

            if (data && data.length > 0) {
                const mappedData = data.map(mapFromDb);
                setServices(mappedData);
            } else {
                const stored = localStorage.getItem('services');
                if (stored) {
                    try {
                        const parsed = JSON.parse(stored);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            setServices(parsed);
                            return;
                        }
                    } catch (e) { }
                }
                setServices(initialServices);
            }
        } catch (error) {
            console.error("Error loading services:", error);
            if (services.length === 0) setServices(initialServices);
        } finally {
            setLoading(false);
        }
    }, [mapFromDb]);

    useEffect(() => {
        fetchServices();
        const handleStorageChange = () => {
            const stored = localStorage.getItem('services');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed)) setServices(parsed);
                } catch (e) { }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [fetchServices]);

    useEffect(() => {
        if (services.length > 0) {
            localStorage.setItem('services', JSON.stringify(services));
        }
    }, [services]);

    const updateService = async (updatedService) => {
        setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
        try {
            const dbPayload = mapToDb(updatedService);
            const { id, ...updates } = dbPayload;
            const { error } = await supabase.from('services').update(updates).eq('id', id);
            if (error) console.warn("Supabase Update Failed (services):", error.message);
        } catch (err) {
            console.warn("Update Service Exception:", err);
        }
    };

    const addService = async (newService) => {
        const tempId = newService.id || `srv_${Date.now()}`;
        const serviceWithId = { ...newService, id: tempId, created_at: new Date().toISOString() };
        setServices(prev => [...prev, serviceWithId]);
        try {
            const { error } = await supabase.from('services').insert(mapToDb(serviceWithId));
            if (error) console.warn("Supabase Add Failed (services):", error.message);
        } catch (err) {
            console.warn("Add Service Exception:", err);
        }
    };

    const deleteService = async (id) => {
        setServices(prev => prev.filter(s => s.id !== id));
        try {
            const { error } = await supabase.from('services').delete().eq('id', id);
            if (error) console.warn("Supabase Delete Failed (services):", error.message);
        } catch (err) {
            console.warn("Delete Service Exception:", err);
        }
    };

    return (
        <ServicesContext.Provider value={{ services, loading, updateService, addService, deleteService, setServices, refreshServices: fetchServices }}>
            {children}
        </ServicesContext.Provider>
    );
};

export const useServices = () => React.useContext(ServicesContext);
