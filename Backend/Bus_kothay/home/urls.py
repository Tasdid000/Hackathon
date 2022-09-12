from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
router = DefaultRouter()
router.register(r"user", UserProfileViewSet)
urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('Bus_info/', Bus_infoListAPIViews.as_view()),
    path('Driver_info/', Driver_infoListAPIViews.as_view()),
    path('Demand', DemandAPIView.as_view()),
    path('Support/feedback', SupportAPIView.as_view()),
    path('Location/', PlaceSerializersListAPIViews.as_view()),
    path('BusRoute/', RouteSerializersListAPIViews.as_view()),
] + router.urls
