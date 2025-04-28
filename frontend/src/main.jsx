import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router";
import { RemindersCreate } from './pages/remindersCreate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reminders/create" element={<RemindersCreate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
