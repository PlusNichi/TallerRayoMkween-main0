class registro {
    constructor() {
        this.email = "";
        this.nombre = "";
        this.pass = "";
    }
}

const form = document.getElementById("form")
const email = document.getElementById("email")
const nombre = document.getElementById("nombre")
const pass = document.getElementById("contraseña")

form.addEventListener('ingresar', e =>{
    e.preventDefault();

    checkInputs();


} );

function checkInputs(){

    const emailValue = email.ariaValueMax.trim();
    const nombreValue = nombre.ariaValueMax.trim();
    const passValue = pass.ariaValueMax.trim();

    if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}

    if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(nombre);
	}
	
    if(passValue === '') {
		setErrorFor(pass, 'Constraseña no debe ingresar en blanco.');
	} else {
		setSuccessFor(pass);

	}


    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }


    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function ingresar(){
        var id = gi('txtId').value;
    
        if (id.length > 0) {
            atenciones[id].trabajo = gi('txtTrabajo').value;
            atenciones[id].diagnostico = gi('txtDiagnostico').value;
            atenciones[id].imagen_modelo = gi('imgImagen_modelo').value;
            mostrarAlerts();
        }
    }
    


    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    
}
