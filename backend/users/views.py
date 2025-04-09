from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
import logging

logger = logging.getLogger(__name__)

class ContactUsView(APIView):
    def post(self, request):
        try:
            serializer = ContactSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {"message": "Thank you for contacting us! We'll get back to you soon."},
                    status=status.HTTP_201_CREATED
                )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            logger.error("Error in ContactUsView POST: %s", str(e), exc_info=True)
            return Response({"error": "Something went wrong on the server."},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
