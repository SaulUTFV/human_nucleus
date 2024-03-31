<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Formulario de Registro</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <div class="container">
    <h2>Formulario de Registro</h2>
    <form method="POST">

      <div class="form-group">
        <label for="foto">Foto de Perfil:</label>
        <input type="file" id="foto" name="foto" accept="image/*" onchange="previewImage()" />
        <img id="preview" src="#" alt="imagen" />
      </div>

      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-group">
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required />
      </div>

      <div class="form-group">
        <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required />
      </div>

      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required />
      </div>

      <button id="submit" name="register" type="submit">Enviar</button>

    </form>
  </div>

  <script src="app.js"></script>

  <?php
  include("registrar.php");
  ?>
</body>

</html>