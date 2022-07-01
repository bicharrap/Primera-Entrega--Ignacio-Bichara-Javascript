
//Entrada de datos

let nombre_producto = "";
let precio_producto = "";



for (let producto of productos){
    let producto_lista = new Producto(producto);

    let respuesta = prompt( "Desea comprar el Producto:" + producto_lista.nombre + "\nPrecio: $" + producto_lista.precio + 
    "\nResponder: SI o NO").toUpperCase();

    switch(respuesta){
        case "SI":
            productos_seleccionados.push(producto_lista);
            console.log("Agregaste al Carrito:" + producto_lista.nombre + "($" + producto_lista.precio + ")");
                break;
            default:
                break;
    }
}
 

let total_pagar = 0;

for (let producto of productos_seleccionados){
    console.log("Producto:" + producto.nombre);
    console.log("Precio original: $" + producto.precio);
    producto.aplicarIVA();
    console.log("Precio c/IVA: $" + producto.precio);

    producto.venderProducto();

    total_pagar += producto.precio;
}

alert("El total a pagar es:$" + total_pagar);
alert(" ¡Gracias por tu compra!, en breve te llegara un correo de confirmación con los datos de la misma");



