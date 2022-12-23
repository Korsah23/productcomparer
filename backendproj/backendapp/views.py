#imports

#from django.shortcuts import render
from .models import Products,User
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProductsSerializer,UserSerializer


# Create your views here.

class ProductViewset(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    
