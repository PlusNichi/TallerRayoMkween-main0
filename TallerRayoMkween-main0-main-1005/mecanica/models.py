from django.db import models

# Create your models here.
class Alumno(models.Model):

    trabajo = models.CharField(primary_key=True, max_length=10)
    diagnostico = models.CharField(max_length=50)
    imagenModelo = models.CharField(max_length=10)
    modeloVehiculo = models.CharField(max_length=50)
    fechaAtencion = models.CharField(max_length=50)
    costo = models.CharField(max_length=40)
    categoria = models.CharField(max_length=40)
    materialesUtilizados = models.CharField(max_length=35)

