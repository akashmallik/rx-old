from rest_framework import routers

from .views import PatientViewSet, EncounterViewSet, SymptomViewSet, ExaminationViewSet, MedicineViewSet, \
    MedicinePowerViewSet, AdviceViewSet

router = routers.DefaultRouter()
router.register('patients', PatientViewSet)
router.register('encounter', EncounterViewSet)
router.register('symptom', SymptomViewSet)
router.register('examination', ExaminationViewSet)
router.register('medicine', MedicineViewSet)
router.register('medicine-power', MedicinePowerViewSet)
router.register('advice', AdviceViewSet)
