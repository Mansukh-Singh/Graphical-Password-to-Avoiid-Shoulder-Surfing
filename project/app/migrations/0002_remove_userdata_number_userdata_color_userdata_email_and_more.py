# Generated by Django 5.0.2 on 2024-03-08 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userdata',
            name='number',
        ),
        migrations.AddField(
            model_name='userdata',
            name='color',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='userdata',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='userdata',
            name='password',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
