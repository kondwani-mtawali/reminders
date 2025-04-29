// Grant Wells
// Kondwani Mtawali | 04.28
/**
 * deleteReminders.js
 *
 * React Query custom hook for deleting a reminder by ID.
 * - Sends a DELETE request to the backend API.
 * - Invalidates cached reminder queries after a successful deletion to refresh data.
 *
 * @returns { mutate, isPending, isError, isSuccess } - Mutation handlers for deleting reminders.
 */
import { ServerRouter } from "react-router";
import { API_URL } from "../constants";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';

//Kondwani's Function
export function useRemindersDelete() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`${API_URL}/reminders/${id}/`, {
                method: 'DELETE',

            });
            if (!response.ok) {
                throw new Error('FAILED DELETION');
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['reminder']); //Automatically re-fetches list of updated reminders
        }
    });
}

//Grant's Function Below
export const reminderDeleteCall = {
    /**
     * Deletes a reminder by its ID
     * @param {number} id - The ID of the reminder to delete
     * @returns {Promise} - Promise representing the delete operation
     */
    deleteReminder: async (id) => {
        try {
            const response = await fetch(`/api/reminders/${id}/`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete reminder');
            }

            return await response.json();
        } catch (error) {
            console.error('Error deleting reminder:', error);
            throw error;
        }
    },

}