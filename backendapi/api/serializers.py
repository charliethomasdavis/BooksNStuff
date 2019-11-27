from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from api.models import Books, Authors, Customers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'first_name', 'last_name']

        # Prevent password from being retrieved with api
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        """
        Create and return a new User model, and create a token
        for the user, given the validated data.
        """
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = '__all__'

class AuthorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authors
        fields = '__all__'

class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = ['customerid', 'first_name', 'last_name', 'email', 'address', 'phone']
        lookup_field = 'customerid'