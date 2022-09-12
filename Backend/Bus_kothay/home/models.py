from location_field.models.plain import PlainLocationField
from xml.etree.ElementTree import Comment
from xml.parsers.expat import model
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserProfileManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("User must have email!")

        email = self.normalize_email(email)
        user = self.model(email=email)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = "email"

    def __str__(self):
        return self.email


profession = (
    ('Student', 'Student'),
    ('Teacher', 'Teacher'),
    ('Staff', 'Staff'),
)

route = (
        ('Temuki', 'Temuki'),
        ('Kazirbazar', 'Kazirbazar'),
        ('Chondipul', 'Chondipul'),
        ('Modina Market', 'Modina Market'),
        ('Rekab Bazar', 'Rekab Bazar'),
        ('Subid Bazar', 'Subid Bazar'),
        ('Humayun Rashid Chattar', 'Humayun Rashid Chattar'),
)


class Bus_info(models.Model):
    id = models.AutoField(primary_key=True)
    license_number = models.BigIntegerField()
    codename = models.CharField(max_length=200)
    capacity = models.IntegerField()
    route = models.CharField(max_length=230, default='', choices=route)
    profession = models.CharField(
        max_length=230, default='', choices=profession)

    def __str__(self):
        return "Bus Code name: " + " " + self.codename


class Driver_info(models.Model):
    id = models.AutoField(primary_key=True)
    Bus = models.ForeignKey(Bus_info, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=50, default="")
    contact_number = models.IntegerField()

    def __str__(self):
        return "Driver name:"+" " + self.full_name


class Place(models.Model):
    id = models.AutoField(primary_key=True)
    city = models.CharField(max_length=25)
    location = PlainLocationField(based_fields=['city'], zoom=7)
    start_time = models.TimeField()

    def __str__(self):
        return "Location :"+" " + self. city


timeslot = (
    ('08:00 AM', '08:00 AM'),
    ('09:00 AM', '09:00 AM'),
    ('12:00 PM', '12:00 PM'),
    ('01:00 PM', '01:00 PM'),
)


class Demand(models.Model):
    ip = models.AutoField(primary_key=True)
    name = models.CharField(max_length=13232, default="")
    ID = models.CharField(max_length=200, default="")
    profession = models.CharField(
        max_length=230, default='', choices=profession)
    route = models.CharField(max_length=230, default='', choices=route)
    timeslot = models.CharField(max_length=230, default='', choices=timeslot)
    message = models.TextField()

    def __str__(self):
        return "Message from" + self.ID

    class Meta:
        verbose_name_plural = 'Demand'


profession = (
    ('student', 'student'),
    ('Teacher', 'Teacher'),
    ('Staff', 'Staff'),
)


class Support(models.Model):
    ip = models.AutoField(primary_key=True)
    full_Name = models.CharField(max_length=100)
    profession = models.CharField(
        max_length=230, default='', choices=profession)
    ID = models.BigIntegerField()
    email = models.EmailField(max_length=200)
    phone = models.BigIntegerField()
    message = models.TextField()

    def __str__(self):
        return "Message from" + self.email

    class Meta:
        verbose_name_plural = 'Support'


class Route(models.Model):
    id = models.AutoField(primary_key=True)
    images = models.ImageField(upload_to='images/')
    route = models.CharField(max_length=230, default='', choices=route)
    timeslot = models.CharField(max_length=230, default='', choices=timeslot)
