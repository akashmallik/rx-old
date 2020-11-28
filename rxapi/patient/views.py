from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.viewsets import ModelViewSet

from .models import Patient, Encounter, Advice, Medicine, Examination, Symptom, MedicinePower
from .serializers import PatientSerializer, EncounterSerializer, AdviceSerializer, MedicineSerializer, \
    ExaminationSerializer, SymptomSerializer, MedicinePowerSerializer, EncounterUpdateSerializer


class PatientViewSet(ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    parser_classes = (MultiPartParser, FormParser)


class EncounterViewSet(ModelViewSet):
    queryset = Encounter.objects.all()
    serializer_class = EncounterSerializer

    def get_serializer_class(self):
        if self.action == 'update' or self.action == 'partial_update':
            return EncounterUpdateSerializer
        return EncounterSerializer


class AdviceViewSet(ModelViewSet):
    queryset = Advice.objects.all()
    serializer_class = AdviceSerializer


class MedicinePowerViewSet(ModelViewSet):
    queryset = MedicinePower.objects.all()
    serializer_class = MedicinePowerSerializer


class MedicineViewSet(ModelViewSet):
    queryset = Medicine.objects.all()
    serializer_class = MedicineSerializer


class ExaminationViewSet(ModelViewSet):
    queryset = Examination.objects.all()
    serializer_class = ExaminationSerializer


class SymptomViewSet(ModelViewSet):
    queryset = Symptom.objects.all()
    serializer_class = SymptomSerializer
