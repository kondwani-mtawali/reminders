/**
 * RemindersDelete.jsx
 * 
 * Page component for deleting an existing reminder by its ID.
 * - Provides a form for the user to input the reminder ID to delete.
 * - Uses a custom React Query mutation hook to perform the deletion.
 * - Redirects to the homepage after successful deletion.
 * - Displays loading and error states during the deletion process.
 */


import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useRemindersDelete } from "../hooks/deleteReminders";

export function RemindersDelete() {
    const [id, setId] = useState("");
    const { mutate, isPending, isError, isSuccess } = useRemindersDelete();
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault();
        mutate(id);
    };

    if (isSuccess) {
        navigate("/");
    }
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
    //Form for user to ener reminder Id to delete, input field for entering the reminder ID, along with a delete button
    return <>
        <h1>Delete Reminder</h1>
        <form onSubmit={handleDelete}>
            <input type="text" placeholder="Reminder ID: Type Integer" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="submit">Delete</button>
        </form>
    </>
}