from rest_framework import serializers
from .models import Patient, Encounter, Advice, Medicine, Examination, Symptom


class EncounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Encounter
        fields = '__all__'


class PatientSerializer(serializers.ModelSerializer):
    encounters = EncounterSerializer(many=True, read_only=True)

    class Meta:
        model = Patient
        fields = '__all__'


class AdviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advice
        fields = '__all__'


class ExaminationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Examination
        fields = '__all__'


class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = '__all__'


class SymptomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Symptom
        fields = '__all__'
