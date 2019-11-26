from django.contrib import admin
from api.models import AuthorContactDetails, AuthorBooks, Authors, BookCat, Books, BooksBookCat, CustomerContactDetails, Customers, OrderItems, Orders, SupplierReps, Suppliers

admin.site.register(AuthorContactDetails)
admin.site.register(AuthorBooks)
admin.site.register(Authors)
admin.site.register(BookCat)
admin.site.register(Books)
admin.site.register(BooksBookCat)
admin.site.register(CustomerContactDetails)
admin.site.register(Customers)
admin.site.register(OrderItems)
admin.site.register(Orders)
admin.site.register(SupplierReps)
admin.site.register(Suppliers)