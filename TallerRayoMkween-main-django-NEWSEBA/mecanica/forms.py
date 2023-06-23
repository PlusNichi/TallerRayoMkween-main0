from django import forms

from mecanica.models import Atencion, formularioContacto


from django.forms import ModelForm


class AtencionForm(ModelForm):
      class Meta:
        model=Atencion
        fields = ['atenciones']
        labels = {'atenciones':'Atencion'}

class formularioContactoForm(ModelForm):
      class Meta:
        model=formularioContacto
        fields = ['contactos']
        labels = {'contactos':'formularioContacto'}



