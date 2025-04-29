//Kondwani Mtawali | 04.28

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