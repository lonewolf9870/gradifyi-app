# Generated by Django 5.1.7 on 2025-04-10 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_alter_contact_country_alter_contact_course_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='message',
            field=models.TextField(blank=True, default='no message'),
        ),
        migrations.AlterUniqueTogether(
            name='contact',
            unique_together={('email', 'phone')},
        ),
    ]
