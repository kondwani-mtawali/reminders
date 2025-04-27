// ReminderAPI.jsx
// Grant Wells


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

    // Add the other API methods here (get, create, update)
};