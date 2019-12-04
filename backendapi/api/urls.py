from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import NestedRouterMixin
from .views import UserViewSet, BooksViewSet, AuthorsViewSet, CustomersViewSet, BookCatViewSet, OrdersViewSet, OrderItemsViewSet

# Subclass DefaultRouter to allow nested routing
class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass

# Route hostname/api/<api_name> to corresponding ViewSet
router = NestedDefaultRouter()
router.register('users', UserViewSet)
router.register('customers', CustomersViewSet)
router.register('orders', OrdersViewSet)
router.register('orderitems', OrderItemsViewSet)

# Books API
books_router = router.register('books', BooksViewSet)
bookcat_router = router.register('category', BookCatViewSet)

# Author API
# Use: '<hostname>/api/authors' to retrieve all authors in DB
# Use: 'hostname/api/authors/<author_id>/books' to retrieve all books by given author
author_router = router.register('authors', AuthorsViewSet)
author_router.register(
    'books', BooksViewSet,
    basename='author_books',
    parents_query_lookups=['authors']
)

urlpatterns = [
    path('', include(router.urls)),
]