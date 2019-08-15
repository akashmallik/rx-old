# Generated by Django 2.2.4 on 2019-08-14 08:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0008_auto_20190814_1221'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='examination',
            name='encounter',
        ),
        migrations.AddField(
            model_name='encounter',
            name='examination',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='patient.Examination'),
        ),
    ]
