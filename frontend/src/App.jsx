import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { reminderDeleteCall } from './reminderDeleteCall';


function App() {
  const [count, setCount] = useState(0)

  // Add a state for reminders
  const [reminders, setReminders] = useState([])

  const handleDelete = async (id) => {
    try {
      await reminderDeleteCall.deleteReminder(id);

      // Update after successful deletion
      setReminders(reminders.filter(reminder => reminder.id !== id));
    } catch (error) {
      console.error("Failed to delete reminder:", error);
      alert("Failed to delete reminder");
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
