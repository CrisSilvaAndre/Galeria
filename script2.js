const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const edad = document.getElementById("edad");
const submitBtn = document.getElementById("submit-btn");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const errorConfirm = document.getElementById("error-confirm");
const errorEdad = document.getElementById("error-edad");

const formulario = document.getElementById("registro-form");

function validarNombre() {
  if (nombre.value.length >= 3) {
    errorNombre.textContent = "";
    return true;
  } else {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    return false;
  }
}

function validarEmail() {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (regex.test(email.value)) {
    errorEmail.textContent = "";
    return true;
  } else {
    errorEmail.textContent = "Ingrese un correo válido.";
    return false;
  }
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])[A-Za-z\\d!@#\\$%\\^&\\*]{8,}$/;
  if (regex.test(password.value)) {
    errorPassword.textContent = "";
    return true;
  } else {
    errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.";
    return false;
  }
}

function validarConfirmPassword() {
  if (password.value === confirmPassword.value) {
    errorConfirm.textContent = "";
    return true;
  } else {
    errorConfirm.textContent = "Las contraseñas no coinciden.";
    return false;
  }
}

function validarEdad() {
  if (parseInt(edad.value) >= 18) {
    errorEdad.textContent = "";
    return true;
  } else {
    errorEdad.textContent = "Debes tener al menos 18 años.";
    return false;
  }
}

function validarFormulario() {
  const valido = validarNombre() &&
                 validarEmail() &&
                 validarPassword() &&
                 validarConfirmPassword() &&
                 validarEdad();

  submitBtn.disabled = !valido;
}

[nombre, email, password, confirmPassword, edad].forEach(input => {
  input.addEventListener('input', validarFormulario);
});

formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Formulario enviado correctamente.");
});
