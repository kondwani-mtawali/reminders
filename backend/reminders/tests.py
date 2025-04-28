# tests.py

from django.test import TestCase, Client
from django.urls import reverse
from .models import Reminder
from django.utils import timezone
import json


class ReminderDeleteTestCase(TestCase):
    """Test case for the Reminder deletion functionality"""

    def setUp(self):
        """Set up test data before each test method runs"""

        # Create a test reminder with a future remind_by date
        self.reminder = Reminder.objects.create(
            title="Test Reminder",
            description="This is a test reminder",
            remind_by=timezone.now() + timezone.timedelta(days=1),
        )

        # Set up the test client
        self.client = Client()

    def test_delete_reminder_success(self):
        """Test that a reminder can be successfully deleted"""

        # Get the starting count of reminders
        initial_count = Reminder.objects.count()

        # Make a DELETE request
        url = reverse("delete_reminder", args=[self.reminder.id])
        response = self.client.delete(url)

        # Check if response was successful
        self.assertEqual(response.status_code, 200)

        # Go through the JSON response
        data = json.loads(response.content)

        # Check if success flag is True
        self.assertTrue(data["success"])

        # Check that the reminder was, in fact, deleted from the database
        self.assertEqual(Reminder.objects.count(), initial_count - 1)

        # Try to find the deleted reminder and verify it doesn't exist
        with self.assertRaises(Reminder.DoesNotExist):
            Reminder.objects.get(id=self.reminder.id)

    def test_delete_nonexistent_reminder(self):
        """Test attempting to delete a reminder that doesn't exist"""

        # Try to delete a reminder with a non-existent ID
        non_existent_id = 9999
        url = reverse("delete_reminder", args=[non_existent_id])
        response = self.client.delete(url)

        # Check that the response status code is 404
        self.assertEqual(response.status_code, 404)

        # Parse the JSON response
        data = json.loads(response.content)

        # Check that the success flag is False
        self.assertFalse(data["success"])

        # Check that the message says the reminder was not found
        self.assertEqual(data["message"], "Reminder not found.")

    def test_reminder_deletion_doesnt_affect_others(self):
        """Test that deleting one reminder doesn't affect other reminders"""

        # Create another reminder
        second_reminder = Reminder.objects.create(
            title="Second Test Reminder",
            description="This is another test reminder",
            remind_by=timezone.now() + timezone.timedelta(days=2),
        )

        # Get the starting count of reminders
        initial_count = Reminder.objects.count()

        # Delete the first reminder
        url = reverse("delete_reminder", args=[self.reminder.id])
        self.client.delete(url)

        # Check that only one reminder was deleted
        self.assertEqual(Reminder.objects.count(), initial_count - 1)

        # Check that the second reminder still exists
        self.assertTrue(Reminder.objects.filter(id=second_reminder.id).exists())

        # Check that the second reminder's data is unchanged
        remaining_reminder = Reminder.objects.get(id=second_reminder.id)
        self.assertEqual(remaining_reminder.title, "Second Test Reminder")
        self.assertEqual(
            remaining_reminder.description, "This is another test reminder"
        )
