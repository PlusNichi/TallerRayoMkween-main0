from datetime import date
from django.db import models

# Create your models here.

class Atencion(models.Model):
     trabajo = models.CharField(primary_key=True, max_length=10)
     diagnostico = models.CharField(max_length=50)
     fecha = models.DateField(max_length=50)
     modeloAuto = models.CharField(max_length=50)
     imagenAuto = models.CharField(max_length=10)
     nombreMecanico = models.CharField(max_length=45)
     nombreCliente = models.CharField(max_length=50)
     rutCliente = models.CharField(max_length=45)
     costo = models.CharField(max_length=40)
     garantia = models.CharField(max_length=30)

     def __str__(self):
        return str(self.trabajo)+" "+str(self.diagnostico)+" "+date(self.fecha)+" "+str(self.modeloAuto)+" "+str(self.imagenAuto)+" "+str(self.nombreMecanico)+" "+str(self.nombreCliente)+" "+str(self.rutCliente)+" "+str(self.costo)+" "+str(self.garantia)



class formularioContacto(models.Model):
    nombreComp = models.CharField(primary_key=True, max_length=50)
    correoGmail = models.CharField(max_length=30)
    marca = models.CharField(max_length=30)
    modeloAuto = models.CharField(max_length=50)
    tipoServicio = models.CharField(max_length=25)
    descripcion = models.CharField(max_length=50)

    def __str__(self):
        return str(self.nombreComp)+" "+str(self.correoGmail)+" "+str(self.marca)+" "+str(self.modeloAuto)+" "+str(self.tipoServicio)+" "+str(self.descripcion)   




