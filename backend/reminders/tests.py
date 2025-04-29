# tests.py
# Created by Grant Wells

from django.test import TestCase, Client
from django.urls import reverse
from .models import Reminder
from django.utils import timezone
import json


class ReminderDeleteTestCase(TestCase):
    """Test case for the Reminder deletion functionality"""

    def setUp(self):
        """Set up test data before each test method runs"""

        # Create a test reminder with a remind_by date
        self.reminder = Reminder.objects.create(
            title="Test Reminder",
            description="This is a test reminder",
            remind_by=timezone.now() + timezone.timedelta(days=1),
        )

        # Set up test client
        self.client = Client()

    def test_delete_reminder_success(self):
        """Test that a reminder can be successfully deleted"""

        # Get the starting count of reminders
        initial_count = Reminder.objects.count()

        # Make a DELETE request to the correct URL
        url = reverse(
            "reminder-detail", args=[self.reminder.id]
        )  # Update to reminder-detail
        response = self.client.delete(url)

        # Check if response was successful
        self.assertEqual(response.status_code, 204)  # 204 for successful DELETE

        # Check that the reminder was, in fact, deleted from the database
        self.assertEqual(Reminder.objects.count(), initial_count - 1)

        # Try to find the deleted reminder and verify it doesn't exist
        with self.assertRaises(Reminder.DoesNotExist):
            Reminder.objects.get(id=self.reminder.id)

    def test_delete_nonexistent_reminder(self):
        """Test that attempts to delete a reminder that doesn't exist"""

        # Try to delete a reminder with a non-existent ID
        non_existent_id = 9999
        url = reverse(
            "reminder-detail", args=[non_existent_id]
        )  # Update to reminder-detail
        response = self.client.delete(url)

        # Check that the response status code is 404
        self.assertEqual(response.status_code, 404)

        # Parse the JSON response
        data = json.loads(response.content)

        # Check if the message contains "not found"
        self.assertEqual(data.get("message"), "Reminder not found.")
