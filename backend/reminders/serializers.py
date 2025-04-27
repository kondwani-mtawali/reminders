""" 
serializers.py
Grant Wells
April 2, 2025
Serialize reminder data so it can be displayed properly.
"""
# reminders/serializers.py
from rest_framework import serializers
from .models import Reminder

class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = '__all__'
