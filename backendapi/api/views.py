from django.contrib.auth.models import User
from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_extensions.mixins import NestedViewSetMixin
from rest_framework.filters import SearchFilter, OrderingFilter
from .serializers import UserSerializer, BooksSerializer, AuthorsSerializer
from api.models import Books, Authors

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class BooksViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer
    #authentication_classes = [TokenAuthentication, ]
    #permission_classes = [IsAuthenticated, ]

    filter_backends = [filters.DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ['isbn', 'title', 'price', 'pubdate', 'userreviews', 'sname']
    search_fields = ['isbn', 'title', 'authors__fname', 'authors__lname']


class AuthorsViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Authors.objects.all()
    serializer_class = AuthorsSerializer
    #authentication_classes = [TokenAuthentication, ]
    #permission_classes = [IsAuthenticated, ]

    filter_backends = [filters.DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ['authorid', 'fname', 'lname', 'dob', 'gender', 'books__isbn', 'books__title']
    search_fields = ['fname', 'lname', 'books__title']