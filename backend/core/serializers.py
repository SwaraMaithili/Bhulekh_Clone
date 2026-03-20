from rest_framework import serializers
from .models import District, Taluka, Village

class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = ['id', 'name']

class TalukaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taluka
        fields = ['id', 'name']

class VillageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Village
        fields = ['id', 'name']