import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getDataConnect, connectDataConnectEmulator } from "firebase/data-connect";

// Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'test-62e9b',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Data Connect configuration
export const connectorConfig = {
    location: import.meta.env.VITE_FIREBASE_DATA_CONNECT_LOCATION || 'us-central1',
    connector: import.meta.env.VITE_FIREBASE_DATA_CONNECT_CONNECTOR || 'main-connector',
    service: import.meta.env.VITE_FIREBASE_DATA_CONNECT_SERVICE || 'test-62e9b'
};

export const dataconnect = getDataConnect(app, connectorConfig);

// Connect to emulators in development
// if (import.meta.env.DEV) {
//     connectAuthEmulator(auth, 'http://127.0.0.1:9099');
//     connectDataConnectEmulator(dataconnect, '127.0.0.1', 9399);
// }

export default app;
