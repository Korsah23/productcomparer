
from .models import Products,User
from rest_framework import serializers



"""
 Class that serializes the Products Model 
 and shows relevant user to those that access the api
"""
class ProductsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Products
        fields = ['name', 'price', 'size','description','pType']
    


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["username","email","location","name","password"]

    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            location=validated_data['location'],
            name=validated_data['name']
        )

        
        user.set_password(validated_data['password'])
        user.save()

        return user


