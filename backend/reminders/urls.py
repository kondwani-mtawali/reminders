# reminders/url.py
# Grant Wells
# Handles, as of now, the delete url.

from django.urls import path
from . import views
from rest_framework import routers
from reminders import views

router = routers.DefaultRouter()
router.register(r"reminders", views.RemindersViewSet)
urlpatterns = router.urls
# urlpatterns = [
#     path(
#         "reminders/<int:reminder_id>/", views.delete_reminder, name="delete_reminder"
#     ),  # Correct?
# ]
