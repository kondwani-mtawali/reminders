/**
 * App.jsx
 * Main page for the Reminders application.
 * - Fetches and displays a list of reminders 
 * - Provides navigation links to create, delete, and reschedule reminders.
 * - Shows reminder ID numbers next to each reminder title.
 * - Handles loading and error states.
 */


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'; //Link needs to be imported?
import { reminderDeleteCall } from './hooks/deleteReminders'; //Grant's Function
import { useRemindersList } from './hooks/useReminders';
import { useRemindersDelete } from './hooks/deleteReminders';
import { useRescheduleReminder } from './hooks/rescheduleReminders';


function App() {
  const { reminders, loading, error } = useRemindersList();
  const deleteReminder = useRemindersDelete();
  const rescheduleReminder = useRescheduleReminder();

  if (loading) {
    return (
      <>
        <h1>--Loading--</h1>
      </>
    );
  }
  if (error) {
    return (
      <>
        <h1>Uh Oh!</h1>
      </>
    );
  }
  return (<>
    <h1>Reminders</h1>
    <p> ID numbers indicated on the left of reminder title</p>
    <Link to="/reminders/create">| Create Your Reminder | </Link>
    <Link to="/reminders/delete:id">  Delete Reminders | </Link>
    <Link to="/reminders/reschedule:id">Reschedule Reminder |</Link>
    {reminders.map(reminder => <h2 key={reminder.id}> {reminder.id}. {reminder.title}</h2>)}
  </>); //Success

}

export default App
