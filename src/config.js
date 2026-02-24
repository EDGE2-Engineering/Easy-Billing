import { WebStorageStateStore } from 'oidc-client-ts';

/**
 * Application Configuration
 * Centralized configuration for Cognito authentication and other app settings
 */

const region = "us-east-1";
const userPoolId = "us-east-1_dfjWHJK6d";
const clientId = "1lghhbdpmu16uv49ndod2pgsm3";
const identityPoolId = "us-east-1:e005e8cc-8f84-472a-b37e-c0bdd6151bf3";
const cognitoDomainPrefix = "edge2-lims";
const domain = `https://${cognitoDomainPrefix}.auth.${region}.amazoncognito.com`;

const origin_url = typeof window !== 'undefined'
    ? window.location.origin
    : "http://localhost:3000";

// Cognito Configuration
export const cognitoConfig = {
    region,
    userPoolId,
    clientId,
    identityPoolId,
    cognitoDomainPrefix,

    // OIDC Configuration for react-oidc-context
    oidc: {
        authority: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`,
        client_id: clientId,
        redirect_uri: origin_url,
        response_type: "code",
        scope: "phone openid profile email aws.cognito.signin.user.admin",
        post_logout_redirect_uri: origin_url,
        userStore: new WebStorageStateStore({ store: window.localStorage }),
        automaticSilentRenew: true,
        loadUserInfo: true,
    },

    // Logout Configuration
    getLogoutUrl: () => {
        const encodedLogoutUri = encodeURIComponent(origin_url);
        return `${domain}/logout?client_id=${clientId}&logout_uri=${encodedLogoutUri}`;
    },
};

// Hardcoded Departments
export const DEPARTMENTS = {
    ACCOUNTS: "Accounts",
    CHEMICAL_ANALYSIS: "Chemical Analysis",
    LOGISTICS: "Logistics",
    PHYSICAL_TESTING: "Physical Testing",
    SOIL_INVESTIGATION: "Soil Investigation",
    NDT: "Non-Destructive Testing (NDT)",
    MATERIAL_RECEIVING: "Material Receiving"
};

export default cognitoConfig;
