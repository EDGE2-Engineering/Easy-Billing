
import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { supabase } from '@/lib/customSupabaseClient';

export const UnitTypesContext = createContext();

export const UnitTypesProvider = ({ children }) => {
    const [unitTypes, setUnitTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUnitTypes = useCallback(async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('service_unit_types')
                .select('*')
                .order('id', { ascending: true });

            if (error) {
                console.error("Error fetching unit types:", error.message);
                return;
            }

            if (data) {
                setUnitTypes(data);
            }
        } catch (error) {
            console.error("Error loading unit types:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addUnitType = async (unitType) => {
        try {
            const { data, error } = await supabase
                .from('service_unit_types')
                .insert([{ unit_type: unitType }])
                .select();

            if (error) throw error;
            if (data) {
                setUnitTypes(prev => [...prev, data[0]]);
            }
        } catch (error) {
            console.error("Error adding unit type:", error);
            throw error;
        }
    };

    const updateUnitType = async (id, unitType) => {
        try {
            const { data, error } = await supabase
                .from('service_unit_types')
                .update({ unit_type: unitType })
                .eq('id', id)
                .select();

            if (error) throw error;
            if (data) {
                setUnitTypes(prev => prev.map(u => u.id === id ? data[0] : u));
            }
        } catch (error) {
            console.error("Error updating unit type:", error);
            throw error;
        }
    };

    const deleteUnitType = async (id) => {
        try {
            const { error } = await supabase
                .from('service_unit_types')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setUnitTypes(prev => prev.filter(u => u.id !== id));
        } catch (error) {
            console.error("Error deleting unit type:", error);
            throw error;
        }
    };

    useEffect(() => {
        fetchUnitTypes();
    }, [fetchUnitTypes]);

    return (
        <UnitTypesContext.Provider value={{
            unitTypes,
            loading,
            refreshUnitTypes: fetchUnitTypes,
            addUnitType,
            updateUnitType,
            deleteUnitType
        }}>
            {children}
        </UnitTypesContext.Provider>
    );
};

export const useUnitTypes = () => useContext(UnitTypesContext);
