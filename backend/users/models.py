# models.py
from django.db import models
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    country = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    message = models.TextField(blank=True,default="no message")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

    class Meta:
        unique_together = ['email', 'phone']  # Ensure unique combination