Reminders
Description
  Reminders is a decoupled web application designed to help users create 
  and manage their reminders. It is built using a React frontend and Django backend.
  Reminders allows users to schedule reminders, reschedule them, and delete reminders.

Features
  1. Create a reminder with a "remind by" time.

  2. Reschedule existing reminders to a new time.

  3. Delete reminders.

  4. A decoupled architecture using React and Django.

  5. Includes a passing test suite with at least three non-trivial tests.

Usage
How to Start the Reminders Project

1. Backend
    a. Navigate to the backend project folder:
         (Assuming your in the Reminders folder)
         - cd backend
   
    b. Set up a Virtual Environment using:
         - python3 -m venv .venv
   
    c. Install dependencies using:
         If you are using UV:
           - uv sync
         Otherwise:
           - pip install

     d. Run Migrations:
           - python3 manage.py migrate

     e. Start the Backend Server:
           - python3 manage.py runserver

3. IMPORTANT STEP - Start a NEW Terminal for the frontend, KEEP the backend terminal running.

4. Frontend
    a. Navigate to the Frontend folder:
         - cd frontend

    b. Install Dependencies:
         - npm install

    c. Start the Frontend:
         - npm run dev

5. Navigate to:
         - http://localhost:8000

6. Create, Manage, Delete Reminders.

   
   
   

