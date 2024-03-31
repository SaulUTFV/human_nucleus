function previewImage() {
    var preview = document.getElementById('preview');
    var file = document.getElementById('foto').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
    }
}

document.getElementById('registroForm').addEventListener('submit', function (event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('contrasena').value;
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var telefono = document.getElementById('telefono').value;

    // Validaciones adicionales en JavaScript (pueden ser más complejas según tus necesidades)

    // Validación básica de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduzca un correo electrónico válido.');
        event.preventDefault();
        return;
    }

    // Validación básica de contraseña (al menos 6 caracteres)
    if (contrasena.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        event.preventDefault();
        return;
    }

    // Validación básica de fecha de nacimiento (mayor de edad)
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    var mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }
    if (edad < 18) {
        alert('Debe ser mayor de edad para registrarse.');
        event.preventDefault();
        return;
    }

    // Validación básica de número de teléfono (solo números y longitud entre 7 y 15)
    var telefonoRegex = /^\d{7,15}$/;
    if (!telefonoRegex.test(telefono)) {
        alert('Por favor, introduzca un número de teléfono válido (solo números y longitud entre 7 y 15 dígitos).');
        event.preventDefault();
        return;
    }
});
