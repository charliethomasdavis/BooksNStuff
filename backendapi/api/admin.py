from django.contrib import admin
from api.models import AuthorContactDetails, AuthorBooks, Authors, BookCat, Books, BooksBookCat, Customers, OrderItems, Orders, SupplierReps, Suppliers

admin.site.register(AuthorContactDetails)

@admin.register(Authors)
class AuthorsAdmin(admin.ModelAdmin):
    search_fields = ['fname', 'lname', 'dob']
    list_display = ('fname','lname','dob',)


admin.site.register(BookCat)
admin.site.register(Books) # Requirement
admin.site.register(Customers) # Requirement 
admin.site.register(OrderItems) # Requirement
admin.site.register(Orders) # Requirement
admin.site.register(SupplierReps) # Requirement
admin.site.register(Suppliers) # Requirement

admin.site.site_header = 'BooksNStuff Administration'
admin.site.site_title = 'BooksNStuff'
