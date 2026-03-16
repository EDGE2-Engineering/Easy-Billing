
import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut
} from "firebase/auth";
import { auth } from '@/lib/firebase';
import { firebaseGenericApi } from '@/lib/firebaseGenericApi';
import { DB_TYPES, DEPARTMENTS } from '@/config';
import { sendTelegramNotification } from '@/lib/notifier';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const hasSynced = React.useRef(false);

    const notifyLogin = useCallback(async (username, fullName) => {
        const message = `🔔 *Firebase Login Alert*\n\nUser: \`${fullName}\` (@${username})`;
        await sendTelegramNotification(message);
    }, []);

    const syncUserToDb = useCallback(async (userData) => {
        try {
            const existingUser = await firebaseGenericApi.getById(userData.id, DB_TYPES.USER);
            if (existingUser) return;

            const newUser = {
                id: userData.id,
                username: userData.username,
                full_name: userData.full_name,
                created_at: new Date().toISOString(),
                created_by: userData.id,
                role: 'standard',
                department: DEPARTMENTS.ACCOUNTS,
                is_active: true,
                type: 'user'
            };
            await firebaseGenericApi.save(DB_TYPES.USER, newUser);
        } catch (error) {
            console.error('Failed to sync user to database:', error);
        }
    }, []);

    const applyFirebaseUser = useCallback((firebaseUser) => {
        if (!firebaseUser) {
            setUser(null);
            setLoading(false);
            hasSynced.current = false;
            return;
        }

        firebaseUser.getIdToken().then(idToken => {
            const userData = {
                id: firebaseUser.uid,
                email: firebaseUser.email,
                username: firebaseUser.email,
                full_name: firebaseUser.displayName || firebaseUser.email,
                role: 'standard',
                department: DEPARTMENTS.ACCOUNTS,
                idToken
            };

            setUser(userData);
            setLoading(false);

            if (!hasSynced.current || hasSynced.current !== firebaseUser.uid) {
                notifyLogin(userData.username, userData.full_name);
                syncUserToDb(userData);
                hasSynced.current = firebaseUser.uid;
            }
        }).catch(err => {
            console.error('getIdToken failed:', err);
            setLoading(false);
        });
    }, [notifyLogin, syncUserToDb]);

    useEffect(() => {
        let isMounted = true;

        // Safety net: force loading=false after 10 seconds if onAuthStateChanged doesn't fire
        const safetyTimer = setTimeout(() => {
            if (isMounted && loading) {
                console.warn('Auth: safety timeout hit');
                setLoading(false);
            }
        }, 10000);

        // onAuthStateChanged will give the current state upon subscription
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (!isMounted) return;
            console.log('onAuthStateChanged:', firebaseUser?.email || 'null');
            if (firebaseUser) {
                applyFirebaseUser(firebaseUser);
            } else {
                setUser(null);
                setLoading(false);
            }
            clearTimeout(safetyTimer);
        });

        return () => {
            isMounted = false;
            clearTimeout(safetyTimer);
            unsubscribe();
        };
    }, [applyFirebaseUser]);

    const login = useCallback(async (email, password) => {
        try {
            console.log('Attempting signInWithEmailAndPassword...', email);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Login error:', error.message);
            throw error;
        }
    }, []);

    const logout = useCallback(async () => {
        await firebaseSignOut(auth);
    }, []);

    const isSuperAdmin = useCallback(() => {
        return user?.role?.toLowerCase() === 'superadmin' || user?.role?.toLowerCase() === 'super_admin';
    }, [user?.role]);

    const isAdmin = useCallback(() => {
        const role = user?.role?.toLowerCase();
        return role === 'admin' || role === 'superadmin' || role === 'super_admin' || role === 'administrator';
    }, [user?.role]);

    const isStandard = useCallback(() => {
        return user?.role?.toLowerCase() === 'standard' || !user?.role;
    }, [user?.role]);


    const contextValue = useMemo(() => ({
        user,
        loading,
        login,
        logout,
        isSuperAdmin,
        isAdmin,
        isStandard,
        idToken: user?.idToken,
        isAuthenticated: !!user,
    }), [user, loading, login, logout, isSuperAdmin, isAdmin, isStandard]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
