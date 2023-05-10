// Ejercicio N°1:

function escaleraNumeros(x) {
  let largoEscalera = x;
  let string = "";
  for (let i = 1; i <= largoEscalera; i++) {
    for (let j = 1; j <= i; j++) {
      string += j;
    }
    string += "\n";
  }
  return string;
}

console.log(escaleraNumeros(6));
console.log(escaleraNumeros(3));

// Ejercicio N°2

let array1 = ["rojo", "azul", "amarillo"];
let array2 = ["blanco", "negro", "rojo"];

function compararArrays(a, b) {
  let comparacion = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] === a[i]) {
        comparacion.push(a[i]);
      }
    }
    return comparacion;
  }
}

console.log(compararArrays(array1, array2));

// Ejercio N°3:

let carrito = {
  montoTotal: 10,
  productos: ["Leche"],
};

class Carrito {
  constructor(monto = 0, productos = []) {
    this.montoTotal = monto;
    this.productos = productos;
  }

  agregarProducto(nombre, precio, unidad) {
    let productoDuplicado = this.validarDuplicado(nombre);

    if (productoDuplicado === null) {
      this.productos.push(new Producto(nombre, precio, unidad));
      this.montoTotal = this.montoTotal + precio * unidad;
    } else {
      console.log(
        `ya existe ${productoDuplicado.nombre} con ${productoDuplicado.cantidad} unidades`
      );
    }
  }

  validarDuplicado(nombre) {
    let productoDuplicado = null;

    this.productos.map((producto) => {
      if (producto.nombre === nombre) {
        productoDuplicado = producto;
      }
    });
    return productoDuplicado;
  }
}

class Producto {
  nombre;
  precio;
  cantidad;

  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

// Inicializando carrito vacio.:

let carrito2 = new Carrito();

// Agregando "Productos" al carrito vacio

carrito2.agregarProducto("Azucar", 5, 2);
carrito2.agregarProducto("Leche", 10, 1);

// validando "Productos Duplicados" en carrito.

carrito2.agregarProducto("Azucar", 10, 3);
carrito2.agregarProducto("Leche", 10, 5);

// Probando datos:

console.log(carrito2);