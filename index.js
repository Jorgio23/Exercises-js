console.log("Texto de prueba") //Este es un comentario

//Variables

let libro = "Clean code"

let numeros = [23, 64, 34, 76, 89, 12]
let animales = ["Perro", "Gato", "Tigre"]
let jugadores = {
    10: "Messi",
    7: "Cristiano"
}
let paises = {
    EC: "Ecuador",
    MX: "Mexico",
    COL: "Colombia"
}
let emails = {
    "Jorge": ["jorgeroa080@gmail.com"],
    "Andres": [
        "andres@gmail.com",
        "jorgeroa080@gmail.com"
    ]
}
const pi = 3.14159265359

//Operadores
console.log(1 + 1)
console.log(1 - 1)
console.log(1 * 1)
console.log(10 / 5)

console.log(1 == 1)
console.log(1 == '4')
console.log(1 === '4')
console.log(4 != 5)
console.log(4 < 5)
console.log(4 >= 5)
console.log(true && true)
console.log(true || true)

//Condicionales

let autorizado = true

if (autorizado) {
    console.log("Puede Ingresar")
} else {
    console.log("No puede ingresar")
}

let entero = 100

if (entero === 99) {
    console.log("Es 99")
} else if (entero === 100) {
    console.log("Es 100")
} else {
    console.log("No es 99 ni 100")
}

let color = 'amarillo'

switch (color) {
    case 'verde':
        console.log("Exito");
        break;
    case 'amarillo':
        console.log("Advertencia");
        break;
    default:
        console.log("Error");
        break;
}

function sumar(primero, segundo) {
    return primero + segundo;
}

let resultado = sumar(3, 4)
console.log(resultado)

function imprimirPrimerElemento(lista) {
    console.log(lista[0]);
}
let animal = ['perro', 'gato', 'tigre'];
imprimirPrimerElemento(animales);


function quicksort(lista) {
    if (lista.length <= 1) {
        return lista;
    }
    let pivote = lista[0]
    let izquierda = []
    let derecha = []
    for (let i = 1; i < lista.length; i++) {
        lista[i] < pivote ? izquierda.push(lista[i]) : derecha.push
            (lista[i]);
    }
    return quicksort(izquierda).concat(pivote, quicksort(derecha));
}

let numero = [23, 45, 16, 37, 3, 99, 22]
let listaOrdenada = quicksort(numero)
console.log(listaOrdenada)

//POO
let javascript = {
    nombre: "JavaScript",
    año: 1995,
    descripción: function () {
        console.log(`${this.nombre} fue creado en ${this.año}`);
    }
}

javascript.descripción()

//Clases

class Lenguaje {
    constructor(nombree, añoo) {
        this.nombree = nombree;
        this.añoo = añoo
    }
    descripción() {
        console.log(`${this.nombree} fue creado en ${this.añoo}`)
    }
}
let javascriptt = new Lenguaje("JavaScript", 1995)
javascriptt.descripción();

//Modulos 
import { restar } from "./modulos.js"

restar (10,2)