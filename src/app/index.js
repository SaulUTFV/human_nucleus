//Starts the funcionalities
document.addEventListener("DOMContentLoaded", function (event) {
    loadProductos()
});

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
// Agreaga la informacion a las variables
function getInformationProducts(pakage) {
    fetch(pakage).then(response => response.json()).then(data => {
        for (let i = 0; i < data.length; i++) {

            // Desconvertir el objeto .json

            let id = data[i].id_bicicleta;
            let elementos_1 = "";
            let elementos_2 = "";
            let elementos_3 = "";

            switch (id.substring(0, 2)) {
                case "MU":
                    elementos_1 += addInformation(data[i].id_bicicleta, data[i].nombre, data[i].tipo, data[i].rango, data[i].marca, data[i].color, data[i].tamano, data[i].precio, data[i].descripcion, data[i].url_img, data[i].added);
                    break;
                case "FU":
                    elementos_2 += addInformation(data[i].id_bicicleta, data[i].nombre, data[i].tipo, data[i].rango, data[i].marca, data[i].color, data[i].tamano, data[i].precio, data[i].descripcion, data[i].url_img, data[i].added);
                    break;
                case "RU":
                    elementos_3 += addInformation(data[i].id_bicicleta, data[i].nombre, data[i].tipo, data[i].rango, data[i].marca, data[i].color, data[i].tamano, data[i].precio, data[i].descripcion, data[i].url_img, data[i].added);
                    break;
                default: alert("Error de validacion");
            }

            document.getElementById("cont-3_cont-slots").innerHTML += elementos_1;
            document.getElementById("cont-4_cont-slots").innerHTML += elementos_2;
            document.getElementById("cont-5_cont-slots").innerHTML += elementos_3;
        }
    })
}
function loadProductos() {
    getInformationProducts('/src/app/MannUserBK.json');
    getInformationProducts('/src/app/FastUserBK.json');
    getInformationProducts('/src/app/RebelUserBK.json');
}
//Exportaciones a otros documentos
//export {totalCarrito}