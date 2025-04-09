# Generated by Django 5.1.7 on 2025-04-09 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_remove_customuser_groups_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contactmessage',
            options={},
        ),
        migrations.RemoveIndex(
            model_name='contactmessage',
            name='users_conta_email_94d804_idx',
        ),
        migrations.RemoveIndex(
            model_name='contactmessage',
            name='users_conta_phone_cf29e5_idx',
        ),
        migrations.RemoveIndex(
            model_name='contactmessage',
            name='users_conta_submitt_bf644a_idx',
        ),
        migrations.RemoveField(
            model_name='contactmessage',
            name='is_processed',
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='country',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='course',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='message',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='phone',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='submitted_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
