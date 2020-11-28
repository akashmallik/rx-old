from django.contrib import admin

from patient.models import Patient, Encounter, Symptom, Examination, MedicinePower, Medicine, Advice

admin.site.register(Patient)
admin.site.register(Encounter)
admin.site.register(Symptom)
admin.site.register(Examination)
admin.site.register(MedicinePower)
admin.site.register(Medicine)
admin.site.register(Advice)
