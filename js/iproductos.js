let productos = [

    {
        id:1,
        nombre: "Producto 1",
        precio: 1300,
        imagen:"../imagenes2/imagen4.jpg",
    },

{
    id:2,
    nombre: "Producto 2",
    precio: 1400,
    imagen:"../imagenes2/imagen4.jpg",
},
{
    id:3,
    nombre: "Producto 3",
    precio: 1500,
    imagen:"../imagenes2/imagen4.jpg",
},
{
    id:4,
    nombre: "Producto 4",
    precio: 1600,
    imagen:"../imagenes2/imagen4.jpg",
},
{
    id:5,
    nombre: "Producto 5",
    precio: 1700,
    imagen:"../imagenes2/imagen4.jpg",
},
{
    id:6,
    nombre: "Producto 6",
    precio: 1800,
    imagen:"../imagenes2/imagen4.jpg",
},
{
    id:7,
    nombre: "Producto 7",
    precio: 1800,
    imagen:"../imagenes2/imagen4.jpg",
},
{
    id:8,
    nombre: "Producto 8",
    precio: 1800,
    imagen:"../imagenes2/imagen4.jpg",
},

];


const contenedor = document.getElementById("container");
productos.forEach((producto,indice)=>{
let card= document.createElement("div");
card.classList.add("card","col-sm-12","col-lg-3")
let html=`<img src="${producto.imagen}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text"> $ ${producto.precio}</p>
    <a href="#" class="btn btn-info" onClick= "agregarAlcarrito(${indice})">comprar</a>
</div>`;
card.innerHTML=html
contenedor.appendChild(card);
});


//construccion carrito
let modalCarrito =document.getElementById("cart");
let total = 0;
const dibujarCarrito = ()=>{
    modalCarrito.className= "cart";
    modalCarrito.innerHTML= "";
    if(cart.length > 0 ){
    cart.forEach((producto, indice) => {
        total = total + producto.precio * producto.cantidad;
        const carritoContainer = document.createElement("div");
        carritoContainer.className ="producto-carrito";
        carritoContainer.innerHTML = `
        <img class="car-img" src="${producto.imagen}"/>
        <div class="product-details">
        ${producto.nombre}
        </div>
        <div class="product-details"> Cantidad: ${producto.cantidad}</div>
        <div class="product-details"> precio: ${producto.precio}</div>
        <div class="product-details"> subtotal: $${producto.precio * producto.cantidad}</div>
        <button class= "btn btn-info" id="remove-product" onClick="removeProduct(${indice})"> Eliminar producto</button>
        `;
        modalCarrito.appendChild(carritoContainer);
    });


const totalContainer= document.createElement("div");
totalContainer.className="total-carrito";
totalContainer.innerHTML= `<div class="total" >TOTAL $ ${total}</div>
<button class= "btn btn-info finalizar" id= "finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA</button>`;
modalCarrito.appendChild(totalContainer);
}else {
    modalCarrito.classList.remove("cart");
}

};

let cart= []

const agregarAlcarrito = (indice)=>{
    const indicEncontradoCarrito = cart.findIndex((elemento) =>{
    return elemento.id === productos[indice].id
});

if(indicEncontradoCarrito === -1 ){
const productoAgregar= productos[indice];
productoAgregar.cantidad = 1
cart.push(productoAgregar);
actualizarStorage(cart);
dibujarCarrito()
} else{
    cart [indicEncontradoCarrito].cantidad +=1
    actualizarStorage(cart)
    dibujarCarrito();
}
};


//Boton eliminar producto
const removeProduct = (indice) =>{

cart.splice(indice,1);
actualizarStorage(cart);
dibujarCarrito()

}

//Boton Finalizar compra

const finalizarCompra = () =>{
const total = document.getElementsByClassName ("total") [0].innerHTML;
modalCarrito.innerHTML ="";
const compraFinalizada=`<div class="compra-finalizada"><p class="compra-parrafo">Ya casi es tuya la compra, el${total}</p>
<div class="datos-cliente">
<p class="datos-parrafo"> Complete el formulario para coordinar la entrega</p>
<button class= "btn btn-info formulario" id= "formulario" onClick="dibujarFormulario()">Formulario</button>
</div>`;
modalCarrito.innerHTML= compraFinalizada;
};

//formulario de finalizar compra

const dibujarFormulario = () => {
    modalCarrito.innerHTML ="";
    const formulario =`
    <h2> Contacto</h2>
    <div class="contact__section-container">
    <div class="row">
    <div class="contact__section__item">
    <label>nombre y apellido</label>
    <input type= "text" id= "nombre y apellido" placeholder= "nombre y apellido"/>
    </div>
    <div class="contact__section__item">
    <label>Email</label>
    <input type= "text" id= "mail" placeholder= "Email"/>
    </div>
    <div class="contact__section__item">
    <label>Telefono</label>
    <input type= "text" id= "telefono" placeholder= "telefono"/>
    </div>
    <div class="contact__section__item">
    <label>Domicilio</label>
    <input type= "text" id= "Domicilio" placeholder= "Domicilio"/>
    </div>
    <div class ="contact-button">
        <button type= "button" class= btn btn-info envio" onClick="mostrarMensaje()">Confirmar</button> 
    </div>
    </div>
    </div>`;
    modalCarrito.innerHTML = formulario;
    };

const mostrarMensaje=() =>{
const nombreyapellidoCliente = document.getElementById("nombre y apellido").value;
const domicilioCliente = document.getElementById ("Domicilio").value;
modalCarrito.innerHTML ="";
let mensaje = `<div class= "mensaje-final"> Gracias ${nombreyapellidoCliente } por tu compra, en 48 hs recibiras tu paquete en ${domicilioCliente}
</div>`;
modalCarrito.innerHTML = mensaje;
};

    

const actualizarStorage = ()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
};
    
