
import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { supabaseAuth } from '@/lib/supabaseAuth';
import { supabaseGenericApi } from '@/lib/supabaseGenericApi';
import { sendTelegramNotification } from '@/lib/notifier';
import { DB_TYPES, DEPARTMENTS } from '@/config';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const hasSynced = React.useRef(false);

    const notifyLogin = useCallback(async (username, fullName) => {
        const message = `🔔 *Supabase Login Alert*\n\nUser: \`${fullName}\` (@${username})`;
        await sendTelegramNotification(message);
    }, []);

    const syncUserToDb = useCallback(async (userData) => {
        try {
            // Check if user already exists
            const existingUser = await supabaseGenericApi.getById(userData.id, DB_TYPES.USER);
            if (existingUser) {
                console.log('AuthContext: User already exists in database, skipping creation.');
                return;
            }

            let department = DEPARTMENTS.ACCOUNTS;
            if (userData.role === 'admin' || userData.role === 'superadmin' || userData.role === 'super_admin' || userData.role === 'administrator') {
                department = DEPARTMENTS.ALL;
            } else {
                department = userData.department || DEPARTMENTS.ACCOUNTS;
            }

            console.log('AuthContext: Creating new user record in database...');
            const newUser = {
                id: userData.id,
                username: userData.username,
                full_name: userData.full_name,
                created_at: new Date().toISOString(),
                role: userData.role || 'standard',
                department: department,
                is_active: true
            };

            await supabaseGenericApi.save(DB_TYPES.USER, newUser);
            console.log('AuthContext: User record created successfully.');
        } catch (error) {
            console.error('Failed to sync user to database:', error);
        }
    }, []);

    useEffect(() => {
        // Initial session check
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                const mappedUser = {
                    id: session.user.id,
                    email: session.user.email,
                    username: session.user.email,
                    full_name: session.user.user_metadata?.full_name || session.user.email,
                    role: session.user.user_metadata?.role || 'standard',
                    accessToken: session.access_token
                };
                setUser(mappedUser);

                if (!hasSynced.current || hasSynced.current !== mappedUser.id) {
                    notifyLogin(mappedUser.username, mappedUser.full_name);
                    syncUserToDb(mappedUser);
                    hasSynced.current = mappedUser.id;
                }
            }
            setLoading(false);
        };

        checkSession();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            console.log('AuthContext: Auth event:', event);
            if (event === 'SIGNED_IN' && session) {
                const mappedUser = {
                    id: session.user.id,
                    email: session.user.email,
                    username: session.user.email,
                    full_name: session.user.user_metadata?.full_name || session.user.email,
                    role: session.user.user_metadata?.role || 'standard',
                    accessToken: session.access_token
                };
                setUser(mappedUser);
                if (!hasSynced.current || hasSynced.current !== mappedUser.id) {
                    notifyLogin(mappedUser.username, mappedUser.full_name);
                    syncUserToDb(mappedUser);
                    hasSynced.current = mappedUser.id;
                }
            } else if (event === 'SIGNED_OUT') {
                setUser(null);
                hasSynced.current = false;
            }
            setLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [notifyLogin, syncUserToDb]);

    const login = useCallback(async (email, password) => {
        if (email && password) {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
        } else {
            // Default to Google if no credentials
            await supabase.auth.signInWithOAuth({ provider: 'google' });
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            await supabase.auth.signOut();
            window.location.href = '/';
        } catch (error) {
            console.error('Logout failed:', error);
            window.location.href = '/';
        }
    }, []);

    const isSuperAdmin = useCallback(() => {
        const role = user?.role?.toLowerCase();
        return role === 'superadmin' || role === 'super_admin';
    }, [user?.role]);

    const isAdmin = useCallback(() => {
        const role = user?.role?.toLowerCase();
        return role === 'admin' || role === 'superadmin' || role === 'super_admin' || role === 'administrator';
    }, [user?.role]);

    const isStandard = useCallback(() => {
        const role = user?.role?.toLowerCase();
        return role === 'standard' || !role;
    }, [user?.role]);

    const contextValue = useMemo(() => ({
        user,
        loading,
        login,
        logout,
        isSuperAdmin,
        isAdmin,
        isStandard,
        isAuthenticated: !!user,
        supabase // Expose if needed
    }), [user, loading, login, logout, isSuperAdmin, isAdmin, isStandard]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export { AuthContext, AuthProvider, useAuth };

