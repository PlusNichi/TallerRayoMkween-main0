	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var nombre = document.forms['form']['nombre'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var nombre_error = document.getElementById('nombre_error');
var password_error = document.getElementById('password_error');

email.addEventListener('textInput', email_Verify);
nombre.addEventListener('textInput', nombre_Verify);
password.addEventListener('textInput', password_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}

	if (nombre.value.length < 9) {
		nombre.style.border = "1px solid red";
		nombre_error.style.display = "block";
		nombre.focus();
		return false;
	}


	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
        redirectTo("Usuario registrado success.html");
        return true;

      } 
	}


function nombre_Verify(){
	if (nombre.value.length >= 8) {
		nombre.style.border = "1px solid silver";
		nombre_error.style.display = "none";
		redirectTo("Usuario registrado success.html");
		return true;
	}
}


function password_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		password_error.style.display = "none";
		redirectTo("Usuario registrado success.html");
		return true;
	}

}
