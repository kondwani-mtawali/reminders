//Kondwani Mtawali | 04.28
/**
 * REACT QUERY HOOK: Reminder Reschedule
 */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { API_URL } from "../constants";


export function useRescheduleReminder() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ id, newRemindBy }) => {
            const response = await fetch(`${API_URL}/reminders/${id}/`, {
                method: 'PATCH', //PATH request for updating existing resource
                headers: {
                    "Content-Type": "application/json" //again, returns JSON format
                },
                body: JSON.stringify({
                    remind_by: newRemindBy,
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
