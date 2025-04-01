""" """

from django.db import models


# Define the Reminder model.
class Reminder(models.Model):
    title = models.CharField(max_length=255)  # Title of the reminder
    description = models.TextField(blank=True, null=True)  # Optional description
    remind_by = models.DateTimeField()  # Date and time when the reminder should trigger
    is_reminder_complete = models.BooleanField(
        default=False
    )  # Status of the reminder (Complete or not complete)
    rem_created_at = models.DateTimeField(
        auto_now_add=True
    )  # Create time stamp of when reminder was created.


def __str__(self):
    return self.title  # Return the title when the Reminder object is printed.
