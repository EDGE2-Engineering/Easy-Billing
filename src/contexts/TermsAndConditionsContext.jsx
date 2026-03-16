
import React, { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { supabaseGenericApi } from '@/lib/supabaseGenericApi';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { DB_TYPES } from '@/config';

const TermsAndConditionsContext = createContext();

const TermsAndConditionsProvider = ({ children }) => {
    const { isAuthenticated, loading: authLoading } = useAuth();
    const [terms, setTerms] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    const fetchTerms = useCallback(async () => {
        if (!isAuthenticated) return;
        setLoading(true);
        try {
            const data = await supabaseGenericApi.listByType(DB_TYPES.TERM_AND_CONDITION);
            setTerms(data || []);
        } catch (error) {
            console.error('Error fetching terms from Supabase:', error);
        } finally {
            setLoading(false);
        }
    }, [isAuthenticated]);

    const addTerm = useCallback(async (text, type = 'general') => {
        if (!isAuthenticated) throw new Error("User not authenticated");
        try {
            const payload = { text, type };
            const savedItem = await supabaseGenericApi.save(DB_TYPES.TERM_AND_CONDITION, payload);
            setTerms(prev => [...prev.filter(t => t.id !== savedItem.id), savedItem]);
            return [savedItem];
        } catch (error) {
            console.error('Error adding term to Supabase:', error);
            throw error;
        }
    }, [isAuthenticated]);

    const updateTerm = useCallback(async (id, text, type) => {
        if (!isAuthenticated) throw new Error("User not authenticated");
        try {
            const payload = { id, text, type };
            const savedItem = await supabaseGenericApi.save(DB_TYPES.TERM_AND_CONDITION, payload);
            setTerms(prev => prev.map(term => term.id === id ? savedItem : term));
            return [savedItem];
        } catch (error) {
            console.error('Error updating term in Supabase:', error);
            throw error;
        }
    }, [isAuthenticated]);

    const deleteTerm = useCallback(async (id) => {
        if (!isAuthenticated) throw new Error("User not authenticated");
        try {
            await supabaseGenericApi.delete(id, DB_TYPES.TERM_AND_CONDITION);
            setTerms(prev => prev.filter(term => term.id !== id));
        } catch (error) {
            console.error('Error deleting term from Supabase:', error);
            throw error;
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (!authLoading && isAuthenticated) {
            fetchTerms();
        } else if (!authLoading && !isAuthenticated) {
            setTerms([]);
            setLoading(false);
        }
    }, [fetchTerms, authLoading, isAuthenticated]);

    const contextValue = useMemo(() => ({
        terms,
        loading,
        addTerm,
        updateTerm,
        deleteTerm,
        fetchTerms
    }), [terms, loading, addTerm, updateTerm, deleteTerm, fetchTerms]);

    return (
        <TermsAndConditionsContext.Provider value={contextValue}>
            {children}
        </TermsAndConditionsContext.Provider>
    );
};
export const useTermsAndConditions = () => {
    const context = useContext(TermsAndConditionsContext);
    if (!context) {
        throw new Error('useTermsAndConditions must be used within a TermsAndConditionsProvider');
    }
    return context;
};

export { TermsAndConditionsContext, TermsAndConditionsProvider };
