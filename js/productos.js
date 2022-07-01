
const productos = [
{nombre: "organico blanco", precio: 3000},
{nombre: "organico fotosensible", precio: 4000},
{nombre: "policarbonato blanco", precio: 3500},
{nombre: "organico foto blue", precio: 3600},
{nombre: "policarbonato blue cat", precio: 3000}
];


const productos_seleccionados =[];

class Producto{
    constructor (objeto){
        this.nombre= objeto.nombre.toUpperCase();
        this.precio= parseFloat (objeto.precio);
        this.iva=21;
        this.vendido= false;
    }



    aplicarIVA(){
        this.precio= this.precio + ((this.precio *this.iva) / 100);
    }

    venderProducto(){
        this.vendido = true;
    }

    fueVendido(){
        return this.vendido;
    }
}

