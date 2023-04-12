class atencion {
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
var atenciones = new Array();

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
        atenciones[id].trabajo = gi('txtTrabajo').value;
        atenciones[id].diagnostico = gi('txtDiagnostico').value;
        atenciones[id].imagen_modelo = gi('txtImagen_modelo').value;
        atenciones[id].modelo_vehiculo = gi('txtModelo_vehiculo').value;
        atenciones[id].fecha_atencion = gi('txtFecha_atencion').value;
        atenciones[id].costo = gi('txtCosto').value;
        atenciones[id].categoria = gi('txtCategoria').value;
        atenciones[id].materiales_utilizados = gi('txtMateriales_utilizados').value;
        atenciones[id].mecanico = gi('txtMecanico').value;
        atenciones[id].rut_mecanico = gi('txtRut_mecanico').value;
        atenciones[id].nombre_propietario = gi('txtNombre_propietario').value;
        atenciones[id].rut_propietario = gi('txtNombre_propietario').value;
        atenciones[id].garantia = gi('txtGarantia').value;
   
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
        atenciones[atenciones.length] = con;
    }
    ocultarForm();
    mostrarEnvioAtencion();
}

function borrarConfirmar(id_atencion){
    if(confirm("¿Esta seguro que quiere borrar este contacto?")){
        borrar(id_atencion);
    }
}

function borrar(id_atencion){
    if(confirm("¿Esta seguro que quiere borrar este contacto?")){
        contactos.splice(id_atencion,1);
        // newCon = newArray();
        // for(x=0; x<atenciones.length; x++){
        //     newCon[newCon.length] = atenciones[x];
        // }
    }
    // contactos = newCon;
    mostrarAtenciones();
}

function editar(id_atencion){
   con = atenciones[id_atencion];
   // borrar(id_contacto);
   agregarAtencion();
   // gi("btn_save").classList.add("d-none");
   // gi("btn_update").classList.remove("d-none");
   gi('txtTrabajo').value = con.trabajo;
   gi('txtDiagnostico').value = con.diagnostico;
   gi('txtImagen_modelo').value = con.imagen_modelo;
   gi('txtModelo_vehiculo').value = con.modelo_vehiculo;
   gi('txtFecha_atencion').value = con.fecha_atencion;
   gi('txtCosto').value = con.costo;
   gi('txtCategoria').value = con.categoria;
   gi('txtMateriales_utlizados').value = con.materiales_utilizados;
   gi('txtCategoria').value = con.categoria;
   gi('txtMateriales_utilizados').value = con.materiales_utilizados;
   gi('txtMecanico').value = con.mecanico;
   gi('txtRut_mecanico').value = con.rut_mecanico;
   gi('txtNombre_propietario').value = con.nombre_propietario;
   gi('txtRut_propietario').value = con.rut_propietario;
   gi('txtGarantia').value = con.garantia;

}


function mostrarAtenciones(){
    gi('todosLasAtenciones').innerHTML = '';
    for(x=0; x<contactos.length; x++){
        con = contactos[x];
        div = document.createElement('div');
        div.setAttribute('class','contacto');
        div.innerHTML = 
        "trabajo: " + con.trabajo + "<br/>" +
        "diagnostico: " + con.diagnostico + "<br/>" +
        "imagen_modelo: " + con.imagen_modelo + "<br/>" +
        "modelo_vehiculo: " + con.modelo_vehiculo + "<br/>" +
        "fecha_atencion: " + con.fecha_atencion + "<br/>" +
        "costo: " + con.costo + "<br/>" +
        "categoria: " + con.categoria + "<br/>" +
        "materiales_utilizados: " + con.materiales_utilizados + "<br/>" +
        "mecanico: " + con.mecanico + "<br/>" +
        "rut_mecanico: " + con.rut_mecanico + "<br/>" +
        "nombre_propietario: " + con.nombre_propietario + "<br/>" +
        "rut_propietario: " + con.rut_propietario + "<br/>" +
        "garantia: " + con.garantia + "<br/>" +
        
        "<button onclick = 'editar ("+x+")' >Editar</button><button onclick = 'borrar ("+x+")'>Borrar</button>";
        gi('todosLasAtenciones').appendChild(div);
    }

}