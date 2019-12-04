from django.contrib.auth.models import User
from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_extensions.mixins import NestedViewSetMixin
from rest_framework.filters import SearchFilter, OrderingFilter
from .serializers import UserSerializer, BooksSerializer, AuthorsSerializer, CustomersSerializer, BookCatSerializer, OrdersSerializer, OrderItemsSerializer
from api.models import Books, Authors, Customers, BookCat, Orders, OrderItems

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CustomersViewSet(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

class BooksViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BooksSerializer
    #authentication_classes = [TokenAuthentication, ]
    #permission_classes = [IsAuthenticated, ]

    filter_backends = [filters.DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ['isbn', 'title', 'price', 'pubdate', 'userreviews', 'sname', 'bookcat__categorydesc']
    search_fields = ['isbn', 'title', 'authors__fname', 'authors__lname', 'bookcat__categorydesc']

class BookCatViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = BookCat.objects.all()
    serializer_class = BookCatSerializer

    filter_backends = [filters.DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ['categorydesc', 'books__isbn', 'books__title']
    search_fields = ['categorydesc','books__isbn', 'books__title']

class AuthorsViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Authors.objects.all()
    serializer_class = AuthorsSerializer
    #authentication_classes = [TokenAuthentication, ]
    #permission_classes = [IsAuthenticated, ]

    filter_backends = [filters.DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ['authorid', 'fname', 'lname', 'dob', 'gender', 'books__isbn', 'books__title']
    search_fields = ['fname', 'lname', 'books__title']

class OrdersViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

    filter_backends = [filters.DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_fields = ['orderid', 'orderval', 'orderdate']

class OrderItemsViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer