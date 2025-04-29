# reminders/url.py
# Grant Wells

from django.urls import path
from . import views
from rest_framework import routers
from reminders import views

router = routers.DefaultRouter()
router.register(r"reminders", views.RemindersViewSet)
urlpatterns = router.urls

# Testing Purposes For Tests:
# urlpatterns = [
# path(
# "reminders/<int:reminder_id>/", views.delete_reminder, name="delete_reminder"
#    ),  # Correct?
# ]
