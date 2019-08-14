from django.db import models
from django.urls import reverse

class Patient(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=254, null=True)
    address = models.TextField(null=True)
    phone = models.CharField(max_length=20)
    SEX_CHOICES = (
        ('', 'Select Sex'),
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Others', 'Others'),
    )
    sex = models.CharField(max_length=6, choices=SEX_CHOICES,)
    age = models.IntegerField()
    BLOOD_GROUP_CHOICES = (
        ('', 'Select Blood Group'),
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    )
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, null=True)
    avatar = models.ImageField(upload_to='uploads/', null=True, blank=True, default='default/user.png')
    

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse('patient_details', kwargs={'pk': self.pk})


class Medicine(models.Model):
    medicine = models.CharField(max_length=40)

    def __str__(self):
        return self.medicine
    

class Encounter(models.Model):
    date = models.DateField(auto_now=True)
    TYPE_CHOICES = (
        ('', 'Select Type'),
        ('ODP', 'ODP'),
    )
    visit_type = models.CharField(max_length=6, choices=TYPE_CHOICES,)
    patient =  models.ForeignKey(Patient, on_delete=models.CASCADE, null =True)
    medicines = models.ManyToManyField(Medicine, null=True, blank = True)
    def __str__(self):
        return self.patient.name+'_'+str(self.date)


class Examination(models.Model):
    pulse = models.SmallIntegerField()
    bp = models.CharField(max_length=6)
    temp = models.SmallIntegerField()
    Resp_Rate = models.SmallIntegerField()
    height = models.SmallIntegerField()
    lifestyle = models.CharField(max_length=6)
    encounter = models.OneToOneField(Encounter, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.bp
    

class Advice(models.Model):
    advice = models.TextField()
    patient =  models.ForeignKey(Patient, on_delete=models.CASCADE, null =True)
    def __str__(self):
        return self.advice
