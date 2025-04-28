//Kondwani Mtawali | 04.28

import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useRemindersCreate } from "../hooks/useReminders";

export function RemindersCreate() {
    const { title, setTitle, remindBy, setRemindBy, loading, error, successful, createReminder } =
        useRemindersCreate();
    const navigate = useNavigate();

    useEffect(() => {
        if (successful) {
            navigate("/");
        }
    }) //navigate inside useEffect to prevent update while rendering


    if (loading) {
        return <>
            <h1>--Loading--</h1>
        </>
    }
    if (error) {
        return <>
            <h1>Something Went Wrong!</h1>
        </>
    }

    return <>
        <h1>Create Reminder</h1>
        <form onSubmit={createReminder}>
            <input type="text" placeholder="Remind Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="datetime-local" placeholder="Remind By" value={remindBy} onChange={(e) => setRemindBy(e.target.value)} />
            <button type="submit">Create</button>
        </form>
    </>
}