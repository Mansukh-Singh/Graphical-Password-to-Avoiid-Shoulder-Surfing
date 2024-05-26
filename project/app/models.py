from django.db import models

# Create your models here.
class UserData(models.Model):
    name = models.CharField(max_length=100, null=True)
    email = models.EmailField(null=True, blank=True)
    password = models.CharField(max_length=100, null=True)
    color = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.name
