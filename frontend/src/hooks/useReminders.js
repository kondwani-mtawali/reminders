import { ServerRouter } from "react-router";
import { API_URL } from "../constants";
import { useState, useEffect } from "react";

//Kondwani | 04/27
export function useRemindersList() {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(API_URL + "/reminders/", {
            headers: {
                "Content-Type": "application/json" //returns a specified format(json in this case)
            }

        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                setLoading(false);
                throw new Error("Error getting data");
            })
            .then((json => {
                setLoading(false);
                setReminders(json);
            }))
            .catch((err) => {
                setError(err);
                setLoading(false);
            })
    }, [/*No Dependencies*/])

    return { reminders, loading, error }
}

export function useRemindersCreate() {
    const [title, setTitle] = useState("");
    const [remindBy, setRemindBy] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Creating a new reminder
     * @param {SubmitEvent} event 
     */

    const createReminder = (event) => {
        event.preventDefault();

        setLoading(true)
        fetch(API_URL + "/reminders/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                remind_by: remindBy,
            })
        })
            .then((response) => {
                if (response.ok) {
                    setLoading(true);
                    setSuccessful(true);
                    return;
                }
                throw new Error("Something Went Wrong!");
            })
            .catch(err => {
                setLoading(false);
                setError(err);
                setSuccessful(false);
            })
    };

    return {
        title,
        setTitle,
        remindBy,
        setRemindBy,
        loading,
        error,
        successful,
        createReminder,
    }
}