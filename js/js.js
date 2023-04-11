class contacto {
    constructor() {
        this.trabajo = "";
        this.diagnostico = "";
        this.imagen_modelo = "";
        this.modelo_vehiculo = "";
        this.fecha_atencion = "";
        this.costo = "";
        this.categoria = "";
        this.materiales_utilizados = "";
        this.mecanico = "";
        this.rut_mecanico = "";
        this.nombre_propietario = "";
        this.rut_propietario = "";
        this.garantia = "";

    }
}
var contactos = new Array();

function gi(id){
    return document.getElementById(id);
}


function agregarAtencion(){
    gi("divFormulario").style.display='inline';
    gi('txtTrabajo').focus();
}

function ocultarForm(){
    gi('txtTrabajo').value = '';
    gi('txtDiagnostico').value = '';
    gi('imgImagen_modelo').value = '';
    gi('txtModelo_vehiculo').value = '';
    gi('tztFecha_atencion').value = '';
    gi('txtCosto').value = '';
    gi('txtCategoria').value = '';
    gi('txtMateriales_utilizados').value = '';
    gi('txtMecanico').value = '';
    gi("txtRut_mecanico") .value='';
    gi("txtNombre_propietario") .value='';
    gi("txtRut_propietario") .value='';
    gi("txtGarantia") .value='';
    gi("divFormulario").style.display='none';

}

function guardar(){
    var id = gi('txtId').value;
    if (id.length > 0) {
        contactos[id].trabajo = gi('txtTrabajo').value;
        contactos[id].diagnostico = gi('txtDiagnostico').value;
        contactos[id].imagen_modelo = gi('txtImagen_modelo').value;
        contactos[id].modelo_vehiculo = gi('txtModelo_vehiculo').value;
        contactos[id].fecha_atencion = gi('txtFecha_atencion').value;
        contactos[id].costo = gi('txtCosto').value;
        contactos[id].categoria = gi('txtCategoria').value;
        contactos[id].materiales_utilizados = gi('txtMateriales_utilizados').value;
        contactos[id].mecanico = gi('txtMecanico').value;
        contactos[id].rut_mecanico = gi('txtRut_mecanico').value;
        contactos[id].nombre_propietario = gi('txtNombre_propietario').value;
        contactos[id].rut_propietario = gi('txtNombre_propietario').value;
        contactos[id].garantia = gi('txtGarantia').value;
   
    } else {
        con = new contacto();
        con.trabajo = gi('txtTrabajo').value;
        con.diagnostico = gi('txtDiagnostico').value;
        con.imagen_modelo = gi('txtImagen_modelo').value;
        con.modelo_vehiculo = gi('txtModelo_vehiculo').value;
        con.fecha_atencion = gi('txtFecha_atencion').value;
        con.costo = gi('txtCosto').value;
        con.categoria = gi('txtCategoria').value;
        con.materiales_utilizados = gi('txtMateriales_utilizados').value;
        con.mecanico = gi('txtMecanico').value;
        con.rut_mecanico = gi('txtRut_mecanico').value;
        con.nombre_propietario = gi('txtNombre_propietario').value;
        con.rut_propietario = gi('txtRut_propietario').value;
        con.garantia = gi('txtGarantia').value;






        contactos[contactos.length] = con;
    }
    ocultarForm();
    mostrarEnvioAtencion();
}

function borrarConfirmar(id_contacto){
    if(confirm("¿Esta seguro que quiere borrar este contacto?")){
        borrar(id_contacto);
    }
}

function borrar(id_contacto){
    if(confirm("¿Esta seguro que quiere borrar este contacto?")){
        contactos.splice(id_contacto,1);
        // newCon = newArray();
        // for(x=0; x<contactos.length; x++){
        //     newCon[newCon.length] = contactos[x];
        // }
    }
    // contactos = newCon;
    mostrarContactos();
}

function editar(id_contacto){
   con = contactos[id_contacto];
   // borrar(id_contacto);
   agregarContacto();
   // gi("btn_save").classList.add("d-none");
   // gi("btn_update").classList.remove("d-none");
   gi('txtNombre').value = con.nombre;
   gi('txtApellido').value = con.apellido;
   gi('txtEdad').value = con.edad;
   gi('txtFecha_nacimiento').value = con.fecha_nacimiento;
   gi('txtFondo').value = con.fondo;
   gi('txtCorreo').value = con.correo;
   gi('txtId').value = id_contacto;
}


function mostrarContactos(){
    gi('todosLosContactos').innerHTML = '';
    for(x=0; x<contactos.length; x++){
        con = contactos[x];
        div = document.createElement('div');
        div.setAttribute('class','contacto');
        div.innerHTML = 
        "nombre: " + con.nombre + "<br/>" +
        "apellido: " + con.apellido + "<br/>" +
        "edad: " + con.edad + "<br/>" +
        "fecha_nacimiento: " + con.fecha_nacimiento + "<br/>" +
        "fondo: " + con.fondo + "<br/>" +
        "correo: " + con.correo + "<br/>" +
        "<button onclick = 'editar ("+x+")' >Editar</button><button onclick = 'borrar ("+x+")'>Borrar</button>";
        gi('todosLosContactos').appendChild(div);
    }

}