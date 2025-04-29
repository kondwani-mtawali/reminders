/**
 * main.jsx
 *
 * Entry point for the Reminders application.
 * - Initializes React root .
 * - Configures React Query client for global caching and state management.
 * - Defines routes for creating, deleting, and rescheduling reminders.
 * - Wraps the application in <StrictMode>, <QueryClientProvider>, and <BrowserRouter>.
 */


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import { RemindersCreate } from './pages/remindersCreate.jsx';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RemindersDelete } from './pages/remindersDelete.jsx';
import { RemindersReschedule } from './pages/remindersReschedule.jsx';

const client = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/reminders/create" element={<RemindersCreate />} />
          <Route path="/reminders/delete:id" element={<RemindersDelete />} />
          <Route path="/reminders/reschedule:id" element={<RemindersReschedule />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  </StrictMode>,
);
