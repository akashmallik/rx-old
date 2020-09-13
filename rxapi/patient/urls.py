from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('patients', views.PatientViewSet)
router.register('encounter', views.EncounterViewSet)
router.register('medicine', views.MedicineViewSet)
