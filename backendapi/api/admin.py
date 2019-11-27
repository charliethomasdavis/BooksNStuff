from django.contrib import admin
from api.models import AuthorContactDetails, AuthorBooks, Authors, BookCat, Books, BooksBookCat, Customers, OrderItems, Orders, SupplierReps, Suppliers

admin.site.register(AuthorContactDetails)
admin.site.register(AuthorBooks)
admin.site.register(Authors) # Requirement
admin.site.register(BookCat)
admin.site.register(Books) # Requirement
admin.site.register(BooksBookCat)
admin.site.register(Customers) # Requirement 
admin.site.register(OrderItems) # Requirement
admin.site.register(Orders) # Requirement
admin.site.register(SupplierReps) # Requirement
admin.site.register(Suppliers) # Requirement