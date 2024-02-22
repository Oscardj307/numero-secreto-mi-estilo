//Variables
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
//let listaNumeros = [4,7,8,3,4]; // Esta variable esta mas abajo y para pruebas en consola de la funciones promedio de lista

//Agregando a lista lenguajesDeProgramacion mas elementos
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

//Funcion para mostrar elemntos de una lista
function mostrarLista (lista) {
  
    console.log(lista);
    return;
}

mostrarLista(lenguajesDeProgramacion);

//Funcion para mostrar elementos de una lista en inverso
function mostrarListaInverso (lista) {
lista.reverse();
return lista;
}

mostrarListaInverso(lenguajesDeProgramacion);


//Funcion Para Calcular promedio de una lista de numeros
// variable: let listaNumeros = [4,7,8,3,4];
function promedioListaDeNumeros(listaDeNumeros){
    //suma de los elementos del array
    let suma = listaDeNumeros.reduce((acumulado, actual) => acumulado + actual);
    let promedio = suma / listaDeNumeros.length; // el promedio es divido por la cantidad de elementos
    return promedio;

} 

console.log(`El promedio de los numeros de la lista es: ${promedioListaDeNumeros(listaNumeros)}`);

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
//Variable
//let listaNumeros = [4,7,8,3,4];

function mostrarMaximoYMinimo (lista) {
let maximo = Math.max(...lista);
let minimo = Math.min(...lista);
let mensaje = `El numero maximo es: ${maximo} y el numero minimo es: ${minimo}`;
return mensaje;
}
mostrarMaximoYMinimo(listaNumeros);


//Crea una función que devuelva la suma de todos los elementos en una lista.
//let listaNumeros = [4,7,8,3,4];

function sumaDeNumeros (lista) {
    let suma = listaNumeros.reduce((acumulado, actual) => acumulado + actual);
    return suma;
}

sumaDeNumeros(listaNumeros);


/* Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.*/
// Se crean variables
/*let listaNumeros1 = [4,7,8,3,4];
let listaNumeros2 = [4,7,8,3,4]; */

//Se crea funcion principal
function  sumaDeListas(lista1, lista2) {
let lista3 = lista1.map(function (elemento, indice) {
  return elemento + lista2[indice];
});
console.log(lista3); 

} 
sumaDeListas(listaNumeros1,listaNumeros2);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let listaNumeros1 = [4,7,8,3,4];
function cuadradoDeLista (lista){
    let resultado = lista.map(function (elemento, indice) {
        return elemento * lista[indice];
      });
      console.log(resultado);

}
cuadradoDeLista(listaNumeros1);