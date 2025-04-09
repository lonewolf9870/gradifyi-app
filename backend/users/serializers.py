# serializers.py
from rest_framework import serializers
from .models import Contact
from django.core.exceptions import ValidationError

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone', 'country', 'course', 'message']
        extra_kwargs = {
            'message': {'required': False, 'allow_blank': True}
        }

    def validate(self, data):
        email = data.get('email')
        phone = data.get('phone')
        
        # Check for existing email
        if Contact.objects.filter(email=email).exists():
            raise serializers.ValidationError({
                'email': 'This email has already been used for submission.'
            })
        
        # Check for existing phone
        if Contact.objects.filter(phone=phone).exists():
            raise serializers.ValidationError({
                'phone': 'This phone number has already been used for submission.'
            })
        
        return data