class Usuario {
    static sessonActive = true
    static carrito = [];
    static totalCarrito = 0;

    // Getter para obtener el estado de la sesión
    static getSessonActive() {
        return this.sessonActive;
    }

    // Setter para actualizar el estado de la sesión
    static setSessonActive(value) {
        this.sessonActive = value;
    }

    // Getter para obtener el carrito
    static getCarrito() {
        return this.carrito;
    }

    // Setter para agregar un producto al carrito
    static addToCarrito(producto) {
        this.carrito.push(producto);
        this.totalCarrito += producto.precio;
    }

    // Setter para eliminar un producto del carrito
    static removeFromCarrito(id) {
        const index = this.carrito.findIndex(producto => producto.id === id);
        if (index !== -1) {
            const precioProductoEliminado = this.carrito[index].precio;
            this.totalCarrito -= precioProductoEliminado;
            this.carrito.splice(index, 1);
        }
    }

    // Getter para obtener el total del carrito
    static getTotalCarrito() {
        return this.totalCarrito;
    }
}