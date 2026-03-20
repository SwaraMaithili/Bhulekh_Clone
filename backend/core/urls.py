from django.urls import path
from . import views

urlpatterns = [
    path('districts/', views.districts),
    path('talukas/<int:district_id>/', views.talukas),
    path('villages/<int:taluka_id>/', views.villages),
]