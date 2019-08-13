from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Patient, Encounter, Advice
from .serializers import PatientSerializer, EncounterSerializer, AdviceSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    parser_classes = (MultiPartParser, FormParser)

class EncounterViewSet(viewsets.ModelViewSet):
    queryset = Encounter.objects.all()
    serializer_class = EncounterSerializer

class AdviceViewSet(viewsets.ModelViewSet):
    lookup_field = "advice_id"
    queryset = Advice.objects.all()
    serializer_class = AdviceSerializer
