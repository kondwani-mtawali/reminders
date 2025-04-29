/**
 * rescheduleRemidners.js
 *
 * React Query custom hook for rescheduling (updating) a reminder's remindBy field.
 * - Sends a PATCH request to the backend API with updated date/time.
 * - Invalidates cached reminder queries after a successful reschedule to refresh data.
 *
 * @returns { mutate, isPending, isError, isSuccess } - Mutation handlers for rescheduling reminders.
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from "../constants";


export function useRescheduleReminder() {
    const queryClient = useQueryClient();

    // Defines a mutation function to send a PATCH request to update a reminder
    return useMutation({
        mutationFn: async ({ id, newRemindBy }) => {
            const response = await fetch(`${API_URL}/reminders/${id}/`, {
                method: 'PATCH', //PATH request for updating existing resource
                headers: {
                    "Content-Type": "application/json" //again, returns JSON format
                },
                body: JSON.stringify({
                    remind_by: newRemindBy, //Updates remind_by field
                }),
            });
            if (!response.ok) {
                throw new Error("FAILED RESCHEDULE!");
            }
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['reminders']); //Automatically re-fetches list of updated reminders[onSuccess]
        },
    });
}
