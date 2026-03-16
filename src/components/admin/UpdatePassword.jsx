
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const UpdatePassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 font-sans text-center">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Password Management</h2>
                <p className="text-gray-500 mb-6">Password management is now handled via Google Authentication. Please use your Google settings to manage your password.</p>
                <Button
                    onClick={() => window.location.href = '/'}
                    className="w-full bg-primary hover:bg-primary-dark"
                >
                    Go back
                </Button>
            </div>
        </div>
    );
};

export default UpdatePassword;
