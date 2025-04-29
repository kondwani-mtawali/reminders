//Kondwani Mtawali | 04.28
/**
 * RemindersReschedule.jsx
 * 
 * Page component for rescheduling an existing reminder's remindBy date/time.
 * - Provides a form for users to input the reminder ID and a new scheduled date.
 * - Uses a custom React Query mutation hook to send a PATCH request to the backend.
 * - Displays loading and error states during the rescheduling process.
 * - Redirects to the homepage upon successful rescheduling.
 */

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useRescheduleReminder } from "../hooks/rescheduleReminders";

export function RemindersReschedule() {
    const [id, setId] = useState("");
    const [newRemindBy, setNewRemindBy] = useState("");
    const { mutate, isPending, isError, isSuccess } = useRescheduleReminder();
    const navigate = useNavigate();

    const handleReschedule = (e) => {
        e.preventDefault();
        mutate({ id: Number(id), newRemindBy });
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/");
        }
    }, [isSuccess, navigate]);

    if (isPending) {
        return <>
            <h1>--Loading--</h1>
        </>
    }
    if (isError) {
        return <>
            <h1>Something Went Wrong!</h1>
        </>
    }

    //Another form for users to enter id number of reminder, allows input for new date, along with a reschedule button
    return <>
        <h1>Reschedule Reminder</h1>
        <form onSubmit={handleReschedule}>
            <input type="number" placeholder="Reminder ID: Type Integer" value={id} onChange={(e) => setId(e.target.value)} />
            <input type="datetime-local" value={newRemindBy} placeholder="Set New Date"
                onChange={(e) => setNewRemindBy(e.target.value)} />
            <button type="submit">Reschedule</button>
        </form>
    </>
}