<?php
// Conexión a la base de datos (modifica estos valores según tu configuración)
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "urany";

// Establecer conexión
$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

echo "Conectado";
?>