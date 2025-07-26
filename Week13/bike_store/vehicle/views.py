from django.shortcuts import render
from .models import Vehicle
from rest_framework.views import APIView
from rest_framework.response import Response
from .serialisers import VehicleSerializer
from rest_framework.permissions import AllowAny

class VehicleView(APIView):
    permission_classes=(AllowAny,)
    def post(self, request):
        Vehicle_data={
            'real_cost' : request.data.type,
        }
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)

