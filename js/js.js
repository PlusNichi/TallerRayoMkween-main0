class contacto {
    constructor() {
        this.nombre = "";
        this.apellido = "";
        this.edad = "";
        this.fecha_nacimiento = "";
        this.fondo = "";
        this.correo = "";

    }
}
var contactos = new Array();

function gi(id){
    return document.getElementById(id);
}


function agregarAtencion(){
    gi("divFormulario").style.display='inline';
    gi('txtNombre').focus();
}

function ocultarForm(){
    gi('txtNombre').value = '';
    gi('txtApellido').value = '';
    gi('txtEdad').value = '';
    gi('txtFecha_nacimiento').value = '';
    gi('txtFondo').value = '';
    gi('txtCorreo').value = '';
    gi('txtId').value = '';
    gi("divFormulario") .style.display='none';
}

function guardar(){
    var id = gi('txtId').value;
    if (id.length > 0) {
        contactos[id].nombre = gi('txtNombre').value;
        contactos[id].apellido = gi('txtApellido').value;
        contactos[id].edad = gi('txtEdad').value;
        contactos[id].fecha_nacimiento = gi('txtFecha_nacimiento').value;
        contactos[id].fondo = gi('txtFondo').value;
        contactos[id].correo = gi('txtCorreo').value;
    } else {
        con = new contacto();
        con.nombre = gi('txtNombre').value;
        con.apellido = gi('txtApellido').value;
        con.edad = gi('txtEdad').value;
        con.fecha_nacimiento = gi('txtFecha_nacimiento').value;
        con.fondo = gi('txtFondo').value;
        con.correo = gi('txtCorreo').value;
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