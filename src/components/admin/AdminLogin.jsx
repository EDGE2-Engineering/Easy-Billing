
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, User, Lock, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { getSiteContent } from '@/config';

const AdminLogin = ({ onLoginSuccess }) => {
    const { login } = useAuth();
    const content = getSiteContent();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasAttemptedAutoLogin, setHasAttemptedAutoLogin] = useState(false);

    // Note: Automatic login with signInWithPopup is blocked by most browsers.
    // Use the "Sign In" button below to authenticate.

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login(username, password);
            onLoginSuccess();
        } catch (err) {
            console.error('Login failed:', err.message);
            setError(err.message || 'Invalid login credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 font-sans text-center">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-10 border border-gray-100 animate-in fade-in zoom-in-95 duration-300">

                {/* Logo and Welcome */}
                <div className="mb-8">
                    <div className="mx-auto mb-6 flex items-center justify-center">
                        <img
                            src={`${import.meta.env.BASE_URL}edge2-logo.png`}
                            alt="EDGE2 Logo"
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{content.global?.siteName || "Easy Billing"}</h1>
                    <p className="text-gray-500 text-sm">Welcome to the management portal. Please sign in to continue.</p>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-lg text-sm flex items-start mb-6 text-left">
                        <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2 text-left">
                        <Label htmlFor="email" className="text-gray-700 font-medium ml-1">Email Address</Label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                <User className="w-5 h-5" />
                            </div>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-12 h-14 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2 text-left">
                        <Label htmlFor="password" className="text-gray-700 font-medium ml-1">Password</Label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                <Lock className="w-5 h-5" />
                            </div>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-12 pr-12 h-14 bg-gray-50/50 border-gray-200 focus:border-primary focus:ring-primary/20 rounded-xl transition-all"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-white h-14 font-semibold text-lg transition-all rounded-xl shadow-md hover:shadow-lg mt-4"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-3 animate-spin" /> Signing In...
                            </>
                        ) : (
                            <>
                                Sign In
                            </>
                        )}
                    </Button>
                </form>


                <div className="mt-8 pt-6 border-t border-gray-50">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Protected By EDGE2 Engineering Solutions India Pvt. Ltd.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
