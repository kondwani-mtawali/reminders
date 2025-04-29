Reminders
  - Description
      - Reminders is a decoupled web application designed to help users create
        and manage their reminders. It is built using a React frontend and Django backend.
        Reminders allows users to schedule reminders, reschedule them, and delete reminders.

Features
  1. Create a reminder with a "remind by" time.

  2. Reschedule existing reminders to a new time.

  3. Delete reminders.

  4. A decoupled architecture using React and Django.

  5. Includes a passing test suite with at least three non-trivial tests.

Usage
- How to Start the Reminders Project

BACKEND
1. Navigate to the backend project folder: (Assuming your in the Reminders folder):
   -     cd backend
   
2. Set up a Virtual Environment using:
   -     python3 -m venv .venv
   -     source "virtualenvironmentName"/bin/activate
   
3. Install dependencies using:
   - If you are using UV:
   -     uv sync
   -   Oherwise:
   -     pip install

4. Run Migrations:
   -      python3 manage.py migrate

5. Start the Backend Server:
   -     python3 manage.py runserver

6. IMPORTANT STEP - Start a NEW Terminal for the frontend, KEEP the backend terminal running.

FRONTEND
1. Navigate to the Frontend folder:
   -     cd frontend

2. Install Dependencies:
   -     npm install

4. Start the Frontend:
   -     npm run dev

5. Navigate to:
   -      http://localhost:5173

10. Create, Manage, Delete Reminders.

   
   
   

