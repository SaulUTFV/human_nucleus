<?php
include("connection.php");
// Función para limpiar y validar los datos del formulario
function limpiarDatos($dato)
{
    // Eliminar espacios en blanco y etiquetas HTML
    $dato = trim($dato);
    $dato = stripslashes($dato);
    $dato = htmlspecialchars($dato);
    return $dato;
}

// Recibir y limpiar datos del formulario
$nombre = limpiarDatos($_POST['nombre']);
$email = limpiarDatos($_POST['email']);
$contrasena = limpiarDatos($_POST['contrasena']);
$fechaNacimiento = limpiarDatos($_POST['fecha_nacimiento']);
$telefono = limpiarDatos($_POST['telefono']);

// Verificar si el email ya está registrado en la base de datos
$sql_verificar_email = "SELECT * FROM usuarios WHERE email = '$email'";
$resultado_verificar_email = $conexion->query($sql_verificar_email);

if ($resultado_verificar_email->num_rows > 0) {
    echo "El correo electrónico ya está registrado.";
    exit(); // Detener la ejecución si el correo electrónico ya está registrado
}

// Hash de la contraseña
$contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);

// Insertar datos en la base de datos
$sql_insertar = "INSERT INTO usuarios (nombre, email, contrasena, fecha_nacimiento, telefono) VALUES ('$nombre', '$email', '$contrasena_hash', '$fechaNacimiento', '$telefono')";

if ($conexion->query($sql_insertar) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error al registrar usuario: " . $conexion->error;
}
?>