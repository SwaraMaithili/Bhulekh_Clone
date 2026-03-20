from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import District, Taluka, Village
from .serializers import DistrictSerializer, TalukaSerializer, VillageSerializer

@api_view(['GET'])
def districts(request):
    qs = District.objects.all().order_by('name')
    return Response(DistrictSerializer(qs, many=True).data)

@api_view(['GET'])
def talukas(request, district_id):
    qs = Taluka.objects.filter(district_id=district_id).order_by('name')
    return Response(TalukaSerializer(qs, many=True).data)

@api_view(['GET'])
def villages(request, taluka_id):
    qs = Village.objects.filter(taluka_id=taluka_id).order_by('name')
    return Response(VillageSerializer(qs, many=True).data)