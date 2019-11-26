# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthorContactDetails(models.Model):
    authorid = models.ForeignKey('Authors', models.DO_NOTHING, db_column='AuthorID', primary_key=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=256, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=100, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'AuthorContactDetails'
        verbose_name_plural = "AuthorContactDetails"


class AuthorBooks(models.Model):
    authorid = models.ForeignKey('Authors', models.DO_NOTHING, db_column='AuthorID', primary_key=True)  # Field name made lowercase.
    isbn = models.ForeignKey('Books', models.DO_NOTHING, db_column='ISBN')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Author_Books'
        unique_together = (('authorid', 'isbn'),)
        verbose_name_plural = "AuthorBooks"


class Authors(models.Model):
    authorid = models.AutoField(db_column='AuthorID', primary_key=True)  # Field name made lowercase.
    fname = models.CharField(db_column='FName', max_length=100)  # Field name made lowercase.
    lname = models.CharField(db_column='LName', max_length=100)  # Field name made lowercase.
    dob = models.DateTimeField(db_column='DoB', blank=True, null=True)  # Field name made lowercase.
    gender = models.CharField(db_column='Gender', max_length=10, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Authors'
        verbose_name_plural = "Authors"


class BookCat(models.Model):
    categorycode = models.IntegerField(db_column='CategoryCode', primary_key=True)  # Field name made lowercase.
    categorydesc = models.CharField(db_column='CategoryDesc', max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'BookCat'
        verbose_name_plural = "BookCats"


class Books(models.Model):
    isbn = models.CharField(db_column='ISBN', primary_key=True, max_length=20)  # Field name made lowercase.
    title = models.CharField(db_column='Title', max_length=127)  # Field name made lowercase.
    pubdate = models.DateField(db_column='PubDate')  # Field name made lowercase.
    price = models.DecimalField(db_column='Price', max_digits=13, decimal_places=2)  # Field name made lowercase.
    userreviews = models.SmallIntegerField(db_column='UserReviews', blank=True, null=True)  # Field name made lowercase.
    sname = models.ForeignKey('Suppliers', models.DO_NOTHING, db_column='SName')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Books'
        verbose_name_plural = "Books"


class BooksBookCat(models.Model):
    isbn = models.ForeignKey(Books, models.DO_NOTHING, db_column='ISBN', primary_key=True)  # Field name made lowercase.
    categorycode = models.ForeignKey(BookCat, models.DO_NOTHING, db_column='CategoryCode')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Books_BookCat'
        unique_together = (('isbn', 'categorycode'),)
        verbose_name_plural = "BooksBookCats"


class CustomerContactDetails(models.Model):
    customerid = models.ForeignKey('Customers', models.DO_NOTHING, db_column='CustomerID', primary_key=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=256, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=100)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=100, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'CustomerContactDetails'
        verbose_name_plural = "CustomerContactDetails"


class Customers(models.Model):
    customerid = models.AutoField(db_column='CustomerID', primary_key=True)  # Field name made lowercase.
    fname = models.CharField(db_column='FName', max_length=100)  # Field name made lowercase.
    lname = models.CharField(db_column='LName', max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Customers'
        verbose_name_plural = "Customers"


class OrderItems(models.Model):
    itemno = models.AutoField(db_column='ItemNo', primary_key=True)  # Field name made lowercase.
    itemprice = models.DecimalField(db_column='ItemPrice', max_digits=13, decimal_places=2)  # Field name made lowercase.
    orderid = models.ForeignKey('Orders', models.DO_NOTHING, db_column='OrderID', blank=True, null=True)  # Field name made lowercase.
    isbn = models.ForeignKey(Books, models.DO_NOTHING, db_column='ISBN', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'OrderItems'
        verbose_name_plural = "OrderItems"


class Orders(models.Model):
    orderid = models.AutoField(db_column='OrderID', primary_key=True)  # Field name made lowercase.
    orderval = models.DecimalField(db_column='OrderVal', max_digits=13, decimal_places=2)  # Field name made lowercase.
    orderdate = models.DateField(db_column='OrderDate')  # Field name made lowercase.
    customerid = models.ForeignKey(Customers, models.DO_NOTHING, db_column='CustomerID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Orders'
        verbose_name_plural = "Orders"


class SupplierReps(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    fname = models.CharField(db_column='FName', max_length=100)  # Field name made lowercase.
    lname = models.CharField(db_column='LName', max_length=100)  # Field name made lowercase.
    workno = models.CharField(db_column='WorkNo', max_length=100, blank=True, null=True)  # Field name made lowercase.
    cellno = models.CharField(db_column='CellNo', max_length=100, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=100)  # Field name made lowercase.
    sname = models.ForeignKey('Suppliers', models.DO_NOTHING, db_column='SName')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SupplierReps'
        unique_together = (('id', 'fname', 'lname'),)
        verbose_name_plural = "SupplierReps"


class Suppliers(models.Model):
    name = models.CharField(db_column='Name', primary_key=True, max_length=100)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Suppliers'
        verbose_name_plural = "Suppliers"


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class AuthtokenToken(models.Model):
    key = models.CharField(primary_key=True, max_length=40)
    created = models.DateTimeField()
    user = models.ForeignKey(AuthUser, models.DO_NOTHING, unique=True)

    class Meta:
        managed = False
        db_table = 'authtoken_token'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
