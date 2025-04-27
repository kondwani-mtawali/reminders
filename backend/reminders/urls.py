# reminders/url.py
# Grant Wells
# Handles, as of now, the delete url.

from django.urls import path
from . import views

urlpatterns = [
    path('reminders/<int:reminder_id>/', views.delete_reminder, name='delete_reminder'),
]