# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer

class ContactUsView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Thank you for contacting us! We'll get back to you soon."},
                status=status.HTTP_201_CREATED
            )
            
        # Return validation errors with proper formatting
        errors = {}
        for field, error_list in serializer.errors.items():
            if field == 'non_field_errors':
                errors['general'] = error_list
            else:
                errors[field] = error_list[0] if error_list else ''
        
        return Response(
            {"errors": errors},
            status=status.HTTP_400_BAD_REQUEST
        )