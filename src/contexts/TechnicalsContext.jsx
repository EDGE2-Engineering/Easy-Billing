
import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { supabaseGenericApi } from '@/lib/supabaseGenericApi';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { DB_TYPES } from '@/config';

const TechnicalsContext = createContext();

const TechnicalsProvider = ({ children }) => {
    const { isAuthenticated, loading: authLoading } = useAuth();
    const [technicals, setTechnicals] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    const fetchTechnicals = useCallback(async () => {
        if (!isAuthenticated) return;
        setLoading(true);
        try {
            const data = await supabaseGenericApi.listByType(DB_TYPES.TECHNICAL);
            setTechnicals(data || []);
        } catch (error) {
            console.error('Error fetching technicals from Supabase:', error);
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    const addTechnical = useCallback(async (text, type) => {
        if (!isAuthenticated) throw new Error("User not authenticated");
        try {
            const payload = { text, type };
            const savedItem = await supabaseGenericApi.save(DB_TYPES.TECHNICAL, payload);
            setTechnicals(prev => [...prev.filter(t => t.id !== savedItem.id), savedItem]);
            return [savedItem];
        } catch (error) {
            console.error('Error adding technical to Supabase:', error);
            throw error;
        }
    }, [isAuthenticated]);

    const updateTechnical = useCallback(async (id, text, type) => {
        if (!isAuthenticated) throw new Error("User not authenticated");
        try {
            const payload = { id, text, type };
            const savedItem = await supabaseGenericApi.save(DB_TYPES.TECHNICAL, payload);
            setTechnicals(prev => prev.map(tech => tech.id === id ? savedItem : tech));
            return [savedItem];
        } catch (error) {
            console.error('Error updating technical in Supabase:', error);
            throw error;
        }
    }, [isAuthenticated]);

    const deleteTechnical = useCallback(async (id) => {
        if (!isAuthenticated) throw new Error("User not authenticated");
        try {
            await supabaseGenericApi.delete(id, DB_TYPES.TECHNICAL);
            setTechnicals(prev => prev.filter(tech => tech.id !== id));
        } catch (error) {
            console.error('Error deleting technical from Supabase:', error);
            throw error;
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (!authLoading && isAuthenticated) {
            fetchTechnicals();
        } else if (!authLoading && !isAuthenticated) {
            setTechnicals([]);
            setLoading(false);
        }
    }, [fetchTechnicals, authLoading, isAuthenticated]);

    const contextValue = useMemo(() => ({
        technicals,
        loading,
        addTechnical,
        updateTechnical,
        deleteTechnical,
        fetchTechnicals
    }), [technicals, loading, addTechnical, updateTechnical, deleteTechnical, fetchTechnicals]);

    return (
        <TechnicalsContext.Provider value={contextValue}>
            {children}
        </TechnicalsContext.Provider>
    );
};
export const useTechnicals = () => {
    const context = useContext(TechnicalsContext);
    if (!context) {
        throw new Error('useTechnicals must be used within a TechnicalsProvider');
    }
    return context;
};

export { TechnicalsContext, TechnicalsProvider };
