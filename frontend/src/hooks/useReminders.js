/**
 * useReminders.js
 * 
 * Custom React hook for fetching a list of reminders from the backend API.
 * - Manages reminders state, loading status, and error handling.
 * - Sends a GET request to retrieve all reminders.
 * - Automatically fetches data on component mount.
 *
 * @returns { reminders, loading, error } - List of reminders and fetch status indicators.
 */


import { ServerRouter } from "react-router";
import { API_URL } from "../constants";
import { useState, useEffect } from "react";

// Custom hook to fetch list of reminders from the backend API
export function useRemindersList() {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch reminders on component mount and manage loading/error states
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

// Custom hook to create a new reminder through the backend API
export function useRemindersCreate() {
    const [title, setTitle] = useState("");
    const [remindBy, setRemindBy] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Creating a new reminder
     * Sends POST request with title and remindBy fields
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

    // Return form field setters, loading/success/error states, and create function
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