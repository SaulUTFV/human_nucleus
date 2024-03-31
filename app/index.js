let jsonBicicletas
let sessonActive = false

// Desconvertir el objeto .json
function getInformationProducts() {
};



// Da formato a la variable
function addInformation(nombre, tipo, rango, marca, color, tamano, precio, descripcion, url_img) {

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
        "<div id=\"cont_button_compra\"><button id=\"button-slots-pr-1\">+</button><button id=\"button-slots-pr-2\">-</button></div>" +
        "<div><p>Descripcion </p><p>" + descripcion + "</p></div></div></div>";
}
// Agreaga la informacion a las variables
function start(pakage) {
    fetch(pakage).then(response => response.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            //Obtenemos la informacion de los productos
            getInformationProducts();
            // Desconvertir el objeto .json

            let id = data[i].id_bicicleta;

            switch (id.substring(0, 2)) {
                case "MU": document.getElementById("cont-3_cont-slots").innerHTML += addInformation(data[i].nombre, data[i].tipo, data[i].rango, data[i].marca, data[i].color, data[i].tamano, data[i].precio, data[i].descripcion, data[i].url_img);
                    break;
                case "FU":
                    document.getElementById("cont-4_cont-slots").innerHTML += addInformation(data[i].nombre, data[i].tipo, data[i].rango, data[i].marca, data[i].color, data[i].tamano, data[i].precio, data[i].descripcion, data[i].url_img);
                    break;
                case "RU":
                    document.getElementById("cont-5_cont-slots").innerHTML += addInformation(data[i].nombre, data[i].tipo, data[i].rango, data[i].marca, data[i].color, data[i].tamano, data[i].precio, data[i].descripcion, data[i].url_img);
                    break;
                default: alert("Error de validacion");
            }
        }
    })
}
//Starts the funcionalities
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("El HTML ha cargado completamente.");
    start('MannUserBK.json');
    start('FastUserBK.json');
    start('RebelUserBK.json');
});