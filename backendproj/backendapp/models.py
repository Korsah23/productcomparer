from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser




# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    size = models.IntegerField()
    pType = models.CharField(max_length=100)      #pizza,cheese,rice, food,etc
    description = models.TextField(max_length=10000)
    product = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)



class User(AbstractUser):
    email = models.EmailField(max_length=120,unique=True)
    location = models.TextField(max_length=100)
    name = models.CharField(max_length=100,unique=True)





   