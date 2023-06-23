from django.shortcuts import render
from django.http import HttpResponse

from mecanica.models import Atencion
from .models import formularioContacto


# Create your views here.
def indexTallermlween(request):
    atenciones=Atencion.objects.all()
    context={"atenciones":atenciones}
    return render(request,'indexTallerMlween.html',context)
    

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
   
   





