/**
 * Supabase auth helper.
 * Provides compatibility layer with existing auth interface.
 */
import { supabase } from './supabase';

export const supabaseAuth = {
    /**
     * Gets the current session from Supabase.
     */
    async getSession() {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error || !session) return null;

        // Map Supabase user to expected format
        return {
            user: {
                id: session.user.id,
                email: session.user.email,
                username: session.user.email,
                full_name: session.user.user_metadata?.full_name || session.user.email,
                name: session.user.user_metadata?.full_name || session.user.email,
                role: session.user.user_metadata?.role || 'standard',
                department: session.user.user_metadata?.department,
                is_active: true,
            },
            expiresAt: new Date(session.expires_at * 1000).toISOString(),
            accessToken: session.access_token,
        };
    },

    /**
     * Signs in with email and password (if implemented)
     * Or redirects to provider
     */
    async signInWithGoogle() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: window.location.origin,
            }
        });
        if (error) throw error;
    },

    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        window.location.href = '/';
    },

    isAuthenticated(user) {
        return !!user;
    }
};

export default supabaseAuth;
