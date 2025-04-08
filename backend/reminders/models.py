from django.db import models

# Create your models here.
"""
models.py
Handles the Reminder model that is used for the Reminders web application
April 1, 2025
Grant Wells
"""

from django.db import models


# Define the Reminder model.
class Reminder(models.Model):
    title = models.CharField(max_length=255)  # Title of the reminder
    description = models.TextField(blank=True, null=True)  # Optional description
    remind_by = models.DateTimeField()  # Date and time when the reminder should trigger

    # Status of the reminder (Complete or not complete)
    is_reminder_complete = models.BooleanField(default=False)
    # Create time stamp of when reminder was created.
    rem_created_at = models.DateTimeField(auto_now_add=True)


def __str__(self):
    return self.title  # Return the title when the Reminder object is printed.
