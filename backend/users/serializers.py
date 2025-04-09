from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone', 'country', 'course', 'message']
        extra_kwargs = {
            'message': {'required': False, 'allow_blank': True}
        }