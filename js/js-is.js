const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const warnings = document.getElementById("warnings");


function isValidEmail(emailIn) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return emailRegex.test(emailIn);
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailIn = email.value.trim();
  const passwordIn = password.value.trim();

  if (!isValidEmail(emailIn)) {
    showWarning("El email no es válido");
    return;
  }

  if (passwordIn.length < 8) {
    showWarning("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  if (emailIn === "Angelrevilla@gmail.com") {
    redirectTo("sesion iniciada log 1.html");
  } else if (emailIn === "JavierGonzales@gmail.com") {
    redirectTo("sesion iniciada log 2.html");
  } else if (emailIn === "Gonzalopenaloza@gmail.com") {
    redirectTo("sesion iniciada log 3.html");
  } else {
    redirectTo("sesion iniciada log usurio.html");
    showSuccessMessage("Enviado");
  }
});



function showWarning(message) {
  warnings.innerHTML = message;
}

function showSuccessMessage(message) {
  warnings.innerHTML = message;
}

function redirectTo(url) {
  window.location.href = url;
}