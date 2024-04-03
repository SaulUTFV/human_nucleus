//Importaciones de archivos
import Usuario from './usuario.js'

//Starts the funcionalities
document.addEventListener("DOMContentLoaded", function (event) {
    console.log(Usuario.getCarrito)
});

// Función para agregar un producto al carrito
function agregarAlCarrito(id, precio) {
    // Agregar el producto al array del carrito
    usuario.carrito.push({ id: id, precio: precio });
    console.log("Add");
    // Sumar el precio del producto al total del carrito
    usuario.totalCarrito += precio;
    console.log(usuario.carrito)
}

// Función para desagregar un producto del carrito
function desAgregarAlCarrito(id, precio) {
    // Encontrar el índice del producto en el carrito
    const index = usuario.carrito.findIndex(producto => producto.id === id);
    // Si se encuentra el producto en el carrito, eliminarlo
    if (index !== -1) {
        // Restar el precio del producto eliminado del total del carrito
        usuario.totalCarrito -= precio;
        // Eliminar el producto del array del carrito
        usuario.carrito.splice(index, 1);
    }
    console.log("UnAdd");
}

// Función para calcular el total del carrito
function calcularTotalCarrito() {
    // Reiniciar el total del carrito
    datos.totalCarrito = 0;
    // Recorrer el array del carrito y sumar los precios de los productos
    datos.carrito.forEach(producto => {
        datos.totalCarrito += producto.precio;
    });
}
function loadCompras() {
    if (sessonActive) {
        mostrarElementosConIdCoincidente('/src/app/MannUserBK.json')
        mostrarElementosConIdCoincidente('/src/app/FastUserBK.json')
        mostrarElementosConIdCoincidente('/src/app/RebelUserBK.json')
    }
}

// Da formato a la variable
function addInformation(id, nombre, tipo, rango, marca, color, tamano, precio, descripcion, url_img, added) {

    // Arreglar este codigo en el CSS
    return "<div class=\"cont-slots-pr\">" +
        "<div class=\"cont-slots-pr_e1\"><img src=\"" + url_img + "\"></div>" +
        "<div class=\"cont-slots-pr_e2\">" +
        "<div><p>Nombre </p><p>" + nombre + "</p></div><div>" +
        "<p>Tipo: </p><p>" + tipo + "</p></div>" +
        "<div><p>Rango edad: </p><p>" + rango + "</p></div>" +
        "<div><p>Marca </p><p>" + marca + "</p></div>" +
        "<div><p>Color </p><p>" + color + "</p></div>" +
        "<div><p>Tamaño rueda </p><p>" + tamano + " IN</p></div>" +
        "<div><p>Precio</p><p> $" + precio + " USD</p></div>" +
        "<div id=\"cont_button_compra\"><button id=\"button-slots-pr-1\" onclick=\"agregarAlCarrito('" + id + "', " + precio + ")\">+</button><button id=\"button-slots-pr-2\" onclick=\"desAgregarAlCarrito('" + id + "', " + precio + ")\">-</button></div>" +
        "<div><p>Descripcion </p><p>" + descripcion + "</p></div></div></div> ";
}

// Función para cargar y parsear un archivo JSON
async function cargarJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
// Función para mostrar elementos con IDs coincidentes con los del carrito
async function mostrarElementosConIdCoincidente(jsonUrl) {
    const data = await cargarJSON(jsonUrl);

    // Filtrar elementos con IDs coincidentes
    const elementosCoincidentes = data.filter(elemento => carrito.some(item => item.id === elemento.id));

    // Mostrar los elementos coincidentes
    elementosCoincidentes.forEach(data => {
        console.log(data);
        document.getElementById("slots_car").innerHTML += addInformation(data.id_bicicleta, data.nombre, data.tipo, data.rango, data.marca, data.color, data.tamano, data.precio, data.descripcion, data.url_img, data.added);
        // Aquí puedes hacer lo que quieras con cada elemento coincidente, como mostrarlo en la página HTML
    });
}