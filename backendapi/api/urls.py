from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet, BooksViewSet

# Route hostname/api/<api_name> to corresponding ViewSet
router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('books', BooksViewSet)

urlpatterns = [
    path('', include(router.urls)),
]