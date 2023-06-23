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
    gi("divFormulario").style.display='block';
    gi('txtTrabajo').focus();
}

function ocultarForm(){
    gi('txtTrabajo').value = '';
    gi('txtDiagnostico').value = '';
    gi('imgImagen_modelo').value = '';
    gi('txtModelo_vehiculo').value = '';
    gi('txtFecha_atencion').value = '';
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
        atenciones[id].imagen_modelo = gi('imgImagen_modelo').value;
        atenciones[id].modelo_vehiculo = gi('txtModelo_vehiculo').value;
        atenciones[id].fecha_atencion = gi('txtFecha_atencion').value;
        atenciones[id].costo = gi('txtCosto').value;
        atenciones[id].categoria = gi('txtCategoria').value;
        atenciones[id].materiales_utilizados = gi('txtMateriales_utilizados').value;
        atenciones[id].mecanico = gi('txtMecanico').value;
        atenciones[id].rut_mecanico = gi('txtRut_mecanico').value;
        atenciones[id].nombre_propietario = gi('txtNombre_propietario').value;
        atenciones[id].rut_propietario = gi('txtRut_propietario').value;
        atenciones[id].garantia = gi('txtGarantia').value;
        mostrarAlerts();
    } else {
        con = new atencion();
        con.trabajo = gi('txtTrabajo').value;
        con.diagnostico = gi('txtDiagnostico').value;
        con.imagen_modelo = gi('imgImagen_modelo').value;
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
        mostrarAlerts();
    }
    ocultarForm();
    mostrarAtenciones();
}

function mostrarAlerts(){
    gi('alert_success').style.display = 'initial';
    setTimeout(function(){gi('alert_success').style.display = 'none'}, 2000);
}

function borrar(id_atencion){
    if(confirm("¿Esta seguro que quiere borrar esta atencion?")){
        atenciones.splice(id_atencion,1);
    }
    mostrarAtenciones();
}

function editar(id_atencion){
    con = atenciones[id_atencion];
    agregarAtencion();
    gi('txtTrabajo').value = con.trabajo;
    gi('txtDiagnostico').value = con.diagnostico;
    gi('imgImagen_modelo').value = con.imagen_modelo;
    gi('txtModelo_vehiculo').value = con.modelo_vehiculo;
    gi('txtFecha_atencion').value = con.fecha_atencion;
    gi('txtCosto').value = con.costo;
    gi('txtCategoria').value = con.categoria;
    gi('txtMateriales_utilizados').value = con.materiales_utilizados;
    gi('txtMecanico').value = con.mecanico;
    gi('txtRut_mecanico').value = con.rut_mecanico;
    gi('txtNombre_propietario').value = con.nombre_propietario;
    gi('txtRut_propietario').value = con.rut_propietario;
    gi('txtGarantia').value = con.garantia;
    gi('txtId').value = id_atencion;

}


function mostrarAtenciones(){
    gi('todosLasAtenciones').innerHTML = '';
    for(x=0; x<atenciones.length; x++){
        con = atenciones[x];
        div = document.createElement('div');
        div.setAttribute('class','panel panel-default');
        div.innerHTML =
        "<div class='panel panel-default'><div class='panel-heading'><span class='panel-title' style='font-weight: bold;'> <a data-toggle='collapse' data-parent='#todosLasAtenciones' href='#collapse"+x+"'>Atencion ("+con.trabajo+") id-"+x+" </a></span></div>"+
        "<div id='collapse"+x+"' class='panel-collapse collapse'>"+
        "<div class='panel-body'>"+
        "<b>trabajo:</b> " + con.trabajo + "<br/>" +
        "<b>diagnostico:</b> " + con.diagnostico + "<br/>" +
        "<b>imagen_modelo:</b> " + con.imagen_modelo + "<br/>" +
        "<b>modelo_vehiculo:</b> " + con.modelo_vehiculo + "<br/>" +
        "<b>fecha_atencion:</b> " + con.fecha_atencion + "<br/>" +
        "<b>costo:</b> " + con.costo + "<br/>" +
        "<b>categoria:</b> " + con.categoria + "<br/>" +
        "<b>materiales_utilizados:</b> " + con.materiales_utilizados + "<br/>" +
        "<b>mecanico:</b> " + con.mecanico + "<br/>" +
        "<b>rut_mecanico:</b> " + con.rut_mecanico + "<br/>" +
        "<b>nombre_propietario:</b> " + con.nombre_propietario + "<br/>" +
        "<b>rut_propietario:</b> " + con.rut_propietario + "<br/>" +
        "<b>garantia:</b> " + con.garantia + "<br/>" +
        "<button onclick = 'editar ("+x+")' >Editar</button><button onclick = 'borrar ("+x+")'>Borrar</button>"+
        "</div></div></div>";
        gi('todosLasAtenciones').appendChild(div);
    }

}