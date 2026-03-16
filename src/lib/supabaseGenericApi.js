/**
 * Generic Supabase API for EDGE2 projects
 * Mirrors the interface of dynamoGenericApi for easy migration.
 */

import { supabase } from './supabase';

export const supabaseGenericApi = {
    /**
     * List all records of a specific type
     * @param {string} table - The table name (corresponds to type)
     */
    async listByType(table) {
        try {
            const { data, error } = await supabase
                .from(table)
                .select('*');

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error(`Supabase listByType error for ${table}:`, error);
            throw error;
        }
    },

    /**
     * Get a single record by its ID
     * @param {string} id - The record ID
     * @param {string} table - The table name
     * @param {string} pkName - The primary key column name (default: 'id')
     */
    async getById(id, table, pkName = 'id') {
        try {
            const { data, error } = await supabase
                .from(table)
                .select('*')
                .eq(pkName, id)
                .single();

            if (error && error.code !== 'PGRST116') throw error; // PGRST116 is "no rows found"
            return data;
        } catch (error) {
            console.error(`Supabase getById error for ${id} in ${table}:`, error);
            throw error;
        }
    },

    /**
     * Create or update a record
     * @param {string} table - The table name
     * @param {Object} data - The record data
     * @param {string} pkName - The primary key column name (default: 'id')
     */
    async save(table, data, pkName = 'id') {
        try {
            // Ensure pk exists
            const pkValue = data[pkName] || crypto.randomUUID();

            // Prepare record
            const item = {
                ...data,
                [pkName]: pkValue,
                updated_at: new Date().toISOString()
            };

            // Remove 'type' field if it was used for DynamoDB but isn't a column
            delete item.type;

            const { data: savedItem, error } = await supabase
                .from(table)
                .upsert(item)
                .select()
                .single();

            if (error) throw error;
            return savedItem;
        } catch (error) {
            console.error(`Supabase save error for ${table}:`, error);
            throw error;
        }
    },

    /**
     * Partially update a record by merging fields
     * @param {string} id - The record ID
     * @param {Object} partialData - The fields to update/merge
     * @param {string} table - The table name
     * @param {string} pkName - The primary key column name (default: 'id')
     */
    async patch(id, partialData, table, pkName = 'id') {
        try {
            const { data: updatedItem, error } = await supabase
                .from(table)
                .update({
                    ...partialData,
                    updated_at: new Date().toISOString()
                })
                .eq(pkName, id)
                .select()
                .single();

            if (error) throw error;
            return updatedItem;
        } catch (error) {
            console.error(`Supabase patch error for ${id} in ${table}:`, error);
            throw error;
        }
    },

    /**
     * Find records by an attribute
     * @param {string} table - The table name
     * @param {string} attrName - The attribute name to filter by
     * @param {any} attrValue - The value to match
     */
    async findByAttribute(table, attrName, attrValue) {
        try {
            const { data, error } = await supabase
                .from(table)
                .select('*')
                .eq(attrName, attrValue);

            if (error) throw error;
            return data || [];
        } catch (error) {
            console.error(`Supabase findByAttribute error for ${table}/${attrName}:`, error);
            throw error;
        }
    },

    /**
     * Delete a record by ID
     * @param {string} id - The record ID
     * @param {string} table - The table name
     * @param {string} pkName - The primary key column name (default: 'id')
     */
    async delete(id, table, pkName = 'id') {
        try {
            const { error } = await supabase
                .from(table)
                .delete()
                .eq(pkName, id);

            if (error) throw error;
            return true;
        } catch (error) {
            console.error(`Supabase delete error for ${id} in ${table}:`, error);
            throw error;
        }
    },

    /**
     * Alias for getById
     */
    async get(id, table, pkName = 'id') {
        return this.getById(id, table, pkName);
    }
};

export default supabaseGenericApi;
