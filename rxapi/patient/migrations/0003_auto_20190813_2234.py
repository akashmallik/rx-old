# Generated by Django 2.2.4 on 2019-08-13 16:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0002_auto_20190813_2200'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='encounter',
            name='examination',
        ),
        migrations.AddField(
            model_name='examination',
            name='encounter',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='patient.Encounter'),
        ),
    ]
