from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from api.models import Books

class UserSerializer(serializers.ModelSerializer):
    """
    Serializes the User model

    Fields:
        - username
        - password
    """
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

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
    """
    Serializes the Book model

    Fields:
        - isbn
        - title
        - pubdate
        - price
        - userreviews
        - sname
    """
    class Meta:
        model = Books
        fields = ['isbn', 'title', 'pubdate', 'price', 'userreviews', 'sname']