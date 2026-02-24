
import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { useAuth as useOidcAuth } from "react-oidc-context";
import { cognitoAuth } from '@/lib/cognitoAuth';
import { sendTelegramNotification } from '@/lib/notifier';


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const auth = useOidcAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const notifyLogin = useCallback(async (username, fullName) => {
        const message = `🔔 *Login Alert*\n\nUser: \`${fullName}\` (@${username})`;
        await sendTelegramNotification(message);
    }, []);

    // Sync OIDC auth state to our internal user state
    useEffect(() => {
        if (auth.isAuthenticated && auth.user) {
            const session = cognitoAuth.getSession(auth);
            if (session) {
                // Use a stable identifier (ID) to check if we actually need to update user
                if (!user || user.id !== session.user.id) {
                    // Only notify on first-time user recognition in this session
                    if (!user) {
                        notifyLogin(session.user.username, session.user.full_name);
                    }
                    setUser({
                        ...session.user,
                        idToken: session.idToken,
                        accessToken: auth.user.access_token
                    });
                }
            }
        } else if (!auth.isLoading && user) {
            setUser(null);
        }

        // Only update loading if it has actually changed
        if (loading !== auth.isLoading) {
            setLoading(auth.isLoading);
        }
    }, [auth.isAuthenticated, auth.user, auth.isLoading, user, notifyLogin, loading]);

    const login = useCallback(async () => {
        await auth.signinRedirect();
    }, [auth]);

    const logout = useCallback(() => {
        auth.signoutRedirect();
        setUser(null);
    }, [auth]);

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
        idToken: user?.idToken, // Expose idToken for DynamoDB APIs
        accessToken: user?.accessToken, // Expose accessToken for Cognito APIs
        isAuthenticated: !!user,
        auth // Expose raw auth object if needed
    }), [user, loading, login, logout, isSuperAdmin, isAdmin, isStandard, auth]);

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
