from rest_framework import serializers
from .models import *
from rest_framework.serializers import ModelSerializer


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = (
            "id",
            "email",
            "password",
        )
        extra_kwargs = {
            "password": {"write_only": True, "style": {"input_type": "password"}}
        }

    def create(self, validated_data):
        user = UserProfile.objects.create_user(
            email=validated_data["email"],
            password=validated_data["password"],
        )

        return user


class Bus_infoserializers(serializers.ModelSerializer):
    class Meta:
        model = Bus_info
        fields = ['id', 'license_number', 'codename',
                  'capacity', 'route', 'profession']


class Driver_infoserializers(serializers.ModelSerializer):
    class Meta:
        model = Driver_info
        fields = ['id', 'Bus', 'full_name', 'contact_number']


class DemandSerializers(serializers.ModelSerializer):
    class Meta:
        model = Demand
        fields = ['ip', "name", 'ID', 'profession',
                  "route", "timeslot", "message"]


class PlaceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ['id', 'city', 'location', "start_time"]


class SupportSerializers(serializers.ModelSerializer):
    class Meta:
        model = Support
        fields = ['ip', 'full_Name', "profession",
                  'ID', "email", "phone", "message"]


class RouteSerializers(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = ['id', 'images', "route", 'timeslot']
