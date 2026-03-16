
import { auth, dataconnect } from "./firebase";
import { DB_TYPES } from "@/config";
import * as sdk from "./dataconnect-sdk";

/**
 * Helper to convert SDK results to snake_case
 */
const toSnake = (str) => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const convertToSnake = (obj) => {
    if (Array.isArray(obj)) return obj.map(convertToSnake);
    if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            acc[toSnake(key)] = convertToSnake(obj[key]);
            return acc;
        }, {});
    }
    return obj;
};

const toCamel = (str) => str.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase().replace('-', '').replace('_', ''));
const convertToCamel = (obj) => {
    if (Array.isArray(obj)) return obj.map(convertToCamel);
    if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            acc[toCamel(key)] = convertToCamel(obj[key]);
            return acc;
        }, {});
    }
    return obj;
};

/**
 * Wraps a promise with a timeout to avoid infinite hangs
 */
const withTimeout = (promise, ms = 10000, label = '') => {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`Data Connect timeout after ${ms}ms${label ? ` [${label}]` : ''}`)), ms)
    );
    return Promise.race([promise, timeout]);
};

export const firebaseGenericApi = {
    async listByType(type) {
        console.log(`[firebaseGenericApi] listByType: ${type}`);
        try {
            let result;
            const dc = dataconnect;
            switch (type) {
                case DB_TYPES.USER:
                    result = await withTimeout(sdk.listUsers(dc), 10000, 'listUsers');
                    break;
                case DB_TYPES.CLIENT:
                    result = await withTimeout(sdk.listClients(dc), 10000, 'listClients');
                    break;
                case DB_TYPES.JOB:
                case DB_TYPES.QUOTATION:
                case DB_TYPES.REPORT:
                case DB_TYPES.MATERIAL_INWARD:
                    result = await withTimeout(sdk.listJobs(dc, { type }), 10000, 'listJobs');
                    break;
                case DB_TYPES.SERVICE:
                    result = await withTimeout(sdk.listServices(dc), 10000, 'listServices');
                    break;
                case DB_TYPES.TEST:
                    result = await withTimeout(sdk.listTests(dc), 10000, 'listTests');
                    break;
                case DB_TYPES.TECHNICAL:
                    result = await withTimeout(sdk.listTechnicals(dc), 10000, 'listTechnicals');
                    break;
                case DB_TYPES.TERM_AND_CONDITION:
                    result = await withTimeout(sdk.listTermsAndConditions(dc), 10000, 'listTermsAndConditions');
                    break;
                case DB_TYPES.HSN_SAC_CODE:
                    result = await withTimeout(sdk.listHsnsacCodes(dc), 10000, 'listHsnsacCodes');
                    break;
                case DB_TYPES.APP_SETTING:
                    result = await withTimeout(sdk.listAppSettings(dc), 10000, 'listAppSettings');
                    break;
                case DB_TYPES.SERVICE_UNIT_TYPE:
                    result = await withTimeout(sdk.listServiceUnitTypes(dc), 10000, 'listServiceUnitTypes');
                    break;
                case DB_TYPES.CLIENT_SERVICE_PRICE:
                    result = await withTimeout(sdk.listClientServicePrices(dc), 10000, 'listClientServicePrices');
                    break;
                case DB_TYPES.CLIENT_TEST_PRICE:
                    result = await withTimeout(sdk.listClientTestPrices(dc), 10000, 'listClientTestPrices');
                    break;
                default:
                    console.warn(`[firebaseGenericApi] Unknown type for listByType: ${type}`);
                    return [];
            }
            const key = Object.keys(result.data)[0];
            const data = convertToSnake(result.data[key] || []);
            console.log(`[firebaseGenericApi] listByType(${type}) returned ${Array.isArray(data) ? data.length : 1} records`);
            return data;
        } catch (error) {
            console.error(`[firebaseGenericApi] listByType error for "${type}":`, error.message);
            // Return empty array instead of throwing — prevents permanent UI lock
            return [];
        }
    },

    async getById(id, type) {
        console.log(`[firebaseGenericApi] getById: ${type} / ${id}`);
        try {
            let result;
            const dc = dataconnect;
            switch (type) {
                case DB_TYPES.USER:
                    result = await withTimeout(sdk.getUser(dc, { id }), 10000, 'getUser');
                    break;
                case DB_TYPES.CLIENT:
                    result = await withTimeout(sdk.getClient(dc, { id }), 10000, 'getClient');
                    break;
                case DB_TYPES.JOB:
                case DB_TYPES.QUOTATION:
                case DB_TYPES.REPORT:
                    result = await withTimeout(sdk.getJob(dc, { id }), 10000, 'getJob');
                    break;
                case DB_TYPES.SERVICE:
                    result = await withTimeout(sdk.getService(dc, { id }), 10000, 'getService');
                    break;
                case DB_TYPES.TEST:
                    result = await withTimeout(sdk.getTest(dc, { id }), 10000, 'getTest');
                    break;
                default:
                    return null;
            }
            const key = Object.keys(result.data)[0];
            const data = convertToSnake(result.data[key]);
            console.log(`[firebaseGenericApi] getById(${type}, ${id}) result:`, data ? 'found' : 'not found');
            return data;
        } catch (error) {
            console.error(`[firebaseGenericApi] getById error for "${type}" id="${id}":`, error.message);
            return null;
        }
    },

    async save(type, data) {
        console.log(`[firebaseGenericApi] save: ${type}`, Object.keys(data));
        try {
            const id = data.id || `id_${Date.now()}`;
            const payload = { ...data, id, updated_at: new Date().toISOString() };
            if (!payload.created_at) payload.created_at = new Date().toISOString();

            const camelPayload = convertToCamel(payload);

            // Derive mutation base name — handle special known types
            const typeToMutationMap = {
                [DB_TYPES.HSN_SAC_CODE]: 'HsnsacCode',
                [DB_TYPES.TERM_AND_CONDITION]: 'TermAndCondition',
                [DB_TYPES.SERVICE_UNIT_TYPE]: 'ServiceUnitType',
                [DB_TYPES.CLIENT_SERVICE_PRICE]: 'ClientServicePrice',
                [DB_TYPES.CLIENT_TEST_PRICE]: 'ClientTestPrice',
            };
            const baseType = typeToMutationMap[type]
                || (type.charAt(0).toUpperCase() + type.slice(1));
            const mutationName = `upsert${baseType}`;

            if (sdk[mutationName]) {
                await withTimeout(sdk[mutationName](dataconnect, camelPayload), 10000, mutationName);
            } else {
                throw new Error(`Mutation "${mutationName}" not found in SDK. Available: ${Object.keys(sdk).filter(k => k.startsWith('upsert')).join(', ')}`);
            }

            return payload;
        } catch (error) {
            console.error(`[firebaseGenericApi] save error for "${type}":`, error.message);
            throw error;
        }
    },

    async patch(id, type, partialData) {
        try {
            const existing = await this.getById(id, type);
            const updated = { ...existing, ...partialData };
            return await this.save(type, updated);
        } catch (error) {
            console.error(`[firebaseGenericApi] patch error for "${type}" id="${id}":`, error.message);
            throw error;
        }
    },

    async delete(id, type) {
        console.log(`[firebaseGenericApi] delete: ${type} / ${id}`);
        try {
            const typeToMutationMap = {
                [DB_TYPES.HSN_SAC_CODE]: 'HsnsacCode',
                [DB_TYPES.TERM_AND_CONDITION]: 'TermAndCondition',
                [DB_TYPES.SERVICE_UNIT_TYPE]: 'ServiceUnitType',
                [DB_TYPES.CLIENT_SERVICE_PRICE]: 'ClientServicePrice',
                [DB_TYPES.CLIENT_TEST_PRICE]: 'ClientTestPrice',
            };
            const baseType = typeToMutationMap[type]
                || (type.charAt(0).toUpperCase() + type.slice(1));
            const mutationName = `delete${baseType}`;

            if (sdk[mutationName]) {
                await withTimeout(sdk[mutationName](dataconnect, { id }), 10000, mutationName);
                return true;
            } else {
                throw new Error(`Mutation "${mutationName}" not found in SDK`);
            }
        } catch (error) {
            console.error(`[firebaseGenericApi] delete error for "${type}" id="${id}":`, error.message);
            throw error;
        }
    },

    async findByAttribute(type, attrName, attrValue) {
        try {
            const all = await this.listByType(type);
            return all.filter(item => item[attrName] === attrValue);
        } catch (error) {
            console.error(`[firebaseGenericApi] findByAttribute error:`, error.message);
            return [];
        }
    }
};

export default firebaseGenericApi;
