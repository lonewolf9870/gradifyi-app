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
        
    def validate_name(self, value):
        return value.lower()

    def validate(self, data):
        email = data.get('email')
        phone = data.get('phone')
        
        # Check for existing email
        if Contact.objects.filter(email=email).exists():
            raise serializers.ValidationError({
                'email': 'Our team is already processing your submission from this email. We will be in touch.'
            })
        
        # Check for existing phone
        if Contact.objects.filter(phone=phone).exists():
            raise serializers.ValidationError({
                'phone': 'This number is already registered. We will reach out to you shortly.'
            })
        
        return data