from .serializers import *
from rest_framework import generics
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import *

class UserProfileViewSet(ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()

class Bus_infoListAPIViews(generics.ListAPIView):
    queryset = Bus_info.objects.all()
    serializer_class = Bus_infoserializers


class Driver_infoListAPIViews(generics.ListAPIView):
    queryset = Driver_info.objects.all()
    serializer_class = Driver_infoserializers


class PlaceSerializersListAPIViews(generics.ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializers

class RouteSerializersListAPIViews(generics.ListAPIView):
    queryset = Route.objects.all()
    serializer_class = RouteSerializers


class DemandAPIView(APIView):
    def get(self, request, format=None):
        Demand_list = Demand.objects.all()
        Demand_Serializers = DemandSerializers(Demand_list, many=True)
        return Response(Demand_Serializers.data)

    def post(self, request, format=None):
        Demand_Serializers = DemandSerializers(data=request.data)
        if Demand_Serializers.is_valid():
            Demand_Serializers.save()
            return Response(Demand_Serializers.data, status=status.HTTP_201_CREATED)
        return Response(Demand_Serializers.errors, status=status.HTTP_400_BAD_REQUEST)


class SupportAPIView(APIView):
    def get(self, request, format=None):
        Support_list = Support.objects.all()
        support_serializers = SupportSerializers(Support_list, many=True)
        return Response(support_serializers.data)

    def post(self, request, format=None):
        support_serializers = SupportSerializers(data=request.data)
        if support_serializers.is_valid():
            support_serializers.save()
            return Response(support_serializers.data, status=status.HTTP_201_CREATED)
        return Response(support_serializers.errors, status=status.HTTP_400_BAD_REQUEST)
