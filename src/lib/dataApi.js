/**
 * Generic Data API for EDGE2 projects
 * Bridges existing application code to Firebase Data Connect.
 */

import { firebaseGenericApi } from "./firebaseGenericApi";

export const dataApi = {
    /**
     * List all records of a specific type
     */
    async listByType(type) {
        return firebaseGenericApi.listByType(type);
    },

    /**
     * Get a single record by its ID
     * @param {string} id - The record ID
     * @param {string} type - The record type (required for Data Connect)
     */
    async getById(id, type) {
        return firebaseGenericApi.getById(id, type);
    },

    /**
     * Create or update a record
     */
    async save(type, data) {
        return firebaseGenericApi.save(type, data);
    },

    /**
     * Partially update a record by merging fields
     */
    async patch(id, type, partialData) {
        return firebaseGenericApi.patch(id, type, partialData);
    },

    /**
     * Find records of a specific type by an attribute
     */
    async findByAttribute(type, attrName, attrValue) {
        const all = await this.listByType(type);
        return all.filter(item => item[attrName] === attrValue);
    },

    /**
     * Delete a record by ID
     */
    async delete(id, type) {
        return firebaseGenericApi.delete(id, type);
    },

    /**
     * Alias for getById
     */
    async get(id, type) {
        return this.getById(id, type);
    }
};

export default dataApi;
