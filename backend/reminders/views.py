# views.py

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Reminder

"""
views.py 
Viewing the set of reminders
April 27, 2025
Kondwani Mtawali

"""
from rest_framework.viewsets import ModelViewSet
from reminders import models, serializers


class RemindersViewSet(ModelViewSet):
    queryset = models.Reminder.objects.all()
    serializer_class = serializers.ReminderSerializer


@csrf_exempt
@require_http_methods(["DELETE"])
def delete_reminder(request, reminder_id):
    """
    Function to delete a specific reminder.

    Start:
        request: The HTTP request object
        reminder_id: The ID of the reminder to delete

    End:
        JsonResponse with success or error message
    """
    try:
        # Try to find the reminder with the ID
        reminder = Reminder.objects.get(id=reminder_id)

        # Store the title for the response message
        reminder_title = reminder.title

        # Delete the reminder
        reminder.delete()

        # Return the success response
        return JsonResponse(
            {
                "success": True,
                "message": f'Reminder "{reminder_title}" has been deleted successfully.',
            }
        )

    except Reminder.DoesNotExist:
        # Return an error if reminder not found
        return JsonResponse(
            {"success": False, "message": "Reminder not found."}, status=404
        )
