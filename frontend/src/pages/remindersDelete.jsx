//Kondwani Mtawali | 04.28
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

    return <>
        <h1>Delete Reminder</h1>
        <form onSubmit={handleDelete}>
            <input type="text" placeholder="Reminder ID: Type Integer" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="submit">Delete</button>
        </form>
    </>
}