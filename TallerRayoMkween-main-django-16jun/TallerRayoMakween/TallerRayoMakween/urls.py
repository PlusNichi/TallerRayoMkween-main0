from django.contrib import admin
from django.urls import path
from requests import adr
from .urls import views

urlpatterns = [

    path('admin/', admin.site.urls),
    path('indexTallermlween/',  views.indexTallermlween, name='indexTallermlween'),
    path('InicioSesion_mec_admi/', views.Iniciosesion_mec_admi, name='Iniciosesion_mec_admi'),
    path('IniciarSesion-adr/', views.IniciarSesion-adr, name='IniciarSesion-adr'),
    path('cuenta_angel_d_revilla/', views.cuenta_angel_d_revilla, name='cuenta_angel_d_revilla'),
    path('Formulario_contacto/', views.Formulario_contacto, name='Formulario_contacto'),
    path('formulario_agregar_nueva_atencion_adr/', views.formulario_agregar_nueva_atencion_adr, name='formulario_agregar_nueva_atencion_adr'),
    path('Estado_atenciones_adr/', views.Estado_atenciones_adr, name='Estado_atenciones_adr'),
    path('Registro_de_usuario/', views.Registro_de_usuario, name='Registro_de_usuario'),
    path('formulario_atenciones_CORREGIDO/', views.formulario_atenciones_CORREGIDO, name='formulario_atenciones_CORREGIDO'),
    path('detalle_trabajo1_mecanica_makween_23/', views.detalle_trabajo1_mecanica_makween_23, name='detalle_trabajo1_mecanica_makween_23'),
    path('detalle_trabajo2_makween_23/', views.detalle_trabajo2_makween_23, name='detalle_trabajo2_makween_23'),
    path('detalle_trabajo3_makween_23/', views.detalle_trabajo3_makween_23, name='detalle_trabajo3_makween_23'),
    path('Ver_atenciones_por/', views.Ver_atenciones_por, name='Ver_atenciones_por'),
    path('Ver_atenciones_x_mecanico/', views.Ver_atenciones_x_mecanico, name='Ver_atenciones_x_mecanico')
]
