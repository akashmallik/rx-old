from django.db import models


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
    sex = models.CharField(max_length=6, choices=SEX_CHOICES)
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


class Symptom(models.Model):
    symptom = models.TextField()

    def __str__(self):
        return self.symptom


class Examination(models.Model):
    pulse = models.SmallIntegerField(null=True, blank=True)
    bp = models.CharField(max_length=7, null=True, blank=True)
    temp = models.SmallIntegerField(null=True, blank=True)
    resp_rate = models.SmallIntegerField(null=True, blank=True)
    height = models.SmallIntegerField(null=True, blank=True)
    lifestyle = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.bp


class MedicinePower(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name


class Medicine(models.Model):
    name = models.CharField(max_length=180)
    power = models.ForeignKey(MedicinePower, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'{self.name} {self.power.name}'


class Advice(models.Model):
    advice = models.TextField()

    def __str__(self):
        return self.advice


class Encounter(models.Model):
    patient = models.ForeignKey(Patient,
                                related_name='encounters',
                                on_delete=models.CASCADE)
    date = models.DateField(auto_now=True)
    TYPE_CHOICES = (
        ('', 'Select Type'),
        ('ODP', 'ODP'),
    )
    visit_type = models.CharField(max_length=6, choices=TYPE_CHOICES, null=True)
    symptoms = models.ManyToManyField(Symptom, related_name='encounters')
    examination = models.OneToOneField(Examination, on_delete=models.CASCADE)
    medicines = models.ManyToManyField(Medicine)
    advices = models.ManyToManyField(Advice)

    def __str__(self):
        return f'{self.patient.name}-{self.date}'
