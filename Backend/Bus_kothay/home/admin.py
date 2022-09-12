from django.contrib import admin

from .models import *
admin.site.register(UserProfile)
admin.site.register(Bus_info)
admin.site.register(Driver_info)
admin.site.register(Place)
admin.site.register(Route)


class Demandadmin(admin.ModelAdmin):
    list_display = ['name', 'ID', "profession"]


class Meta:
    model = Demand


admin.site.register(Demand, Demandadmin)


class Supportadmin(admin.ModelAdmin):
    list_display = ['full_Name', 'ID', "email"]


class Meta:
    model = Support


admin.site.register(Support, Supportadmin)

