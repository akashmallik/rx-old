from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Patient, Encounter, Advice, Medicine, Examination, Symptom
from .serializers import PatientSerializer, EncounterSerializer, AdviceSerializer, MedicineSerializer, ExaminationSerializer, SymptomSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    parser_classes = (MultiPartParser, FormParser)

class EncounterViewSet(viewsets.ModelViewSet):
    queryset = Encounter.objects.all()
    serializer_class = EncounterSerializer

class AdviceViewSet(viewsets.ModelViewSet):
    # lookup_field = "advice_id"
    queryset = Advice.objects.all()
    serializer_class = AdviceSerializer

class MedicineViewSet(viewsets.ModelViewSet):
    # lookup_field = "medicine_id"
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer

class ExaminationViewSet(viewsets.ModelViewSet):
    queryset = Examination.objects.all()
    serializer_class = ExaminationSerializer

class SymptomViewSet(viewsets.ModelViewSet):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer
