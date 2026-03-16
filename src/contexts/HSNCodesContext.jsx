
import React, { createContext, useState, useEffect, useCallback, useContext, useMemo } from 'react';
import { dataApi } from '@/lib/dataApi';
import { useAuth } from '@/contexts/AuthContext';
import { DB_TYPES } from '@/config';

const HSNCodesContext = createContext();

const HSNCodesProvider = ({ children }) => {
    const { idToken, isAuthenticated, loading: authLoading } = useAuth();
    const [hsnCodes, setHsnCodes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchHsnCodes = useCallback(async () => {
        if (!idToken) return;
        setLoading(true);
        try {
            const data = await dataApi.listByType(DB_TYPES.HSN_SAC_CODE);
            if (data) {
                setHsnCodes(data.sort((a, b) => (a.code || '').localeCompare(b.code || '')));
            }
        } catch (error) {
            console.error("Error loading HSN codes from Firebase Data Connect:", error);
        } finally {
            setLoading(false);
        }
    }, [idToken]);

    const addHsnCode = useCallback(async (hsnData) => {
        try {
            const savedItem = await dataApi.save(DB_TYPES.HSN_SAC_CODE, hsnData);
            setHsnCodes(prev => [...prev.filter(h => h.id !== savedItem.id), savedItem].sort((a, b) => (a.code || '').localeCompare(b.code || '')));
        } catch (error) {
            console.error("Error adding HSN code:", error);
            throw error;
        }
    }, []);

    const updateHsnCode = useCallback(async (id, hsnData) => {
        if (!idToken) throw new Error("User not authenticated");
        try {
            const savedItem = await dataApi.save(DB_TYPES.HSN_SAC_CODE, { ...hsnData, id });
            setHsnCodes(prev => prev.map(h => h.id === id ? savedItem : h).sort((a, b) => (a.code || '').localeCompare(b.code || '')));
        } catch (error) {
            console.error("Error updating HSN code:", error);
            throw error;
        }
    }, [idToken]);

    const deleteHsnCode = useCallback(async (id) => {
        if (!idToken) throw new Error("User not authenticated");
        try {
            await dataApi.delete(id, DB_TYPES.HSN_SAC_CODE);
            setHsnCodes(prev => prev.filter(h => h.id !== id));
        } catch (error) {
            console.error("Error deleting HSN code:", error);
            throw error;
        }
    }, [idToken]);

    useEffect(() => {
        if (!authLoading && isAuthenticated) {
            fetchHsnCodes();
        } else if (!authLoading && !isAuthenticated) {
            setHsnCodes([]);
            setLoading(false);
        }
    }, [fetchHsnCodes, authLoading, isAuthenticated]);

    const contextValue = useMemo(() => ({
        hsnCodes,
        loading,
        refreshHsnCodes: fetchHsnCodes,
        addHsnCode,
        updateHsnCode,
        deleteHsnCode
    }), [hsnCodes, loading, fetchHsnCodes, addHsnCode, updateHsnCode, deleteHsnCode]);

    return (
        <HSNCodesContext.Provider value={contextValue}>
            {children}
        </HSNCodesContext.Provider>
    );
};

export const useHSNCodes = () => {
    const context = useContext(HSNCodesContext);
    if (!context) {
        throw new Error('useHSNCodes must be used within a HSNCodesProvider');
    }
    return context;
};

export { HSNCodesContext, HSNCodesProvider };
