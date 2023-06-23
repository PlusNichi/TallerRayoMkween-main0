from django.shortcuts import render
from django.http import HttpResponse

from Taller_Makween.TallerRayo import TallerRayo

from .models import Atencion
from .models import formularioContacto


# Create your views here.
def indexTallermlween(request):
    return render(request, 'indexTallermlween.html', {}),
    

def InicioSesion_mec_admi(request):
    return render(request, 'InicioSesion_mec_admi.html', {})


def formulario_atenciones_CORREGIDO(request):
  if request.method is not "POST":

    atenciones=Atencion.objects.all()
    context={'atenciones': atenciones}
    return render(request, 'formulario_atenciones_CORREGIDO', context)
  
def formularioContacto(request):
   if request.method is not "POST":

    contactos=formularioContacto.objects.all()
    context={'contactos': contactos}
    return render(request, 'Formulario_contacto.html', context)
   
def crud(request):
   Carro = TallerRayo.objects.all()
   context = {'Carro': Carro}
   return render(request,'Carro/carros_list.html',context)
   





