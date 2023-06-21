from django.db import models

# Create your models here.

class Atencion(models.Model):
     trabajo = models.CharField(primary_key=True, max_length=10)
     diagnostico = models.CharField(max_length=50)
     fecha = models.CharField(max_length=50)
     modeloAuto = models.CharField(max_length=50)
     imagenAuto = models.CharField(max_length=10)
     nombreMecanico = models.CharField(max_length=45)
     nombreCliente = models.CharField(max_length=50)
     rutCliente = models.CharField(max_length=45)
     costo = models.CharField(max_length=40)
     garantia = models.CharField(max_length=30)

     def __str__(self):
        return str(self.trabajo)+" "+str(self.diagnostico)+" "+str(self.fecha)+" "+str(self.modeloAuto)+" "+str(self.imagenAuto)+" "+str(self.nombreMecanico)+" "+str(self.nombreCliente)+" "+str(self.rutCliente)+" "+str(self.costo)+" "+str(self.garantia)


class Alumno(models.Model):

    trabajo = models.CharField(primary_key=True, max_length=10)
    diagnostico = models.CharField(max_length=50)
    imagenModelo = models.CharField(max_length=10)
    modeloVehiculo = models.CharField(max_length=50)
    fechaAtencion = models.CharField(max_length=50)
    costo = models.CharField(max_length=40)
    categoria = models.CharField(max_length=40)
    materialesUtilizados = models.CharField(max_length=35)
    mecanico = models.CharField(max_length=45)
    rutMecanico = models.CharField(max_length=45)
    nombrePropietario = models.CharField(max_length=50)
    rutPropietario = models.CharField(max_length=45)
    garantia = models.CharField(max_length=30)

    def __str__(self):
        return str(self.trabajo)+" "+str(self.diagnostico)+" "+str(self.imagenModelo)+" "+str(self.modeloVehiculo)+" "+str(self.fechaAtencion)+" "+str(self.costo)+" "+str(self.categoria)+" "+str(self.materialesUtilizados)+" "+str(self.mecanico)+" "+str/(self.rutMecanico)+" "+str(self.nombrePropietario)+" "+str(self.rutPropietario)+" "+str(self.garantia)


