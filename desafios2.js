
 //Calcular el IMC
function calcularIMC (peso, altura) {
parseFloat(peso, altura);
IMC = peso / (altura*altura) ;
return IMC;
}

 console.log(calcularIMC('45.5','1.70'));

 //calcular factorial de un numero
 function factorial(n) {
    if (n==0) {
        return 1;
    
    } else {
        return n * factorial(n-1);
    }
    
 }
 console.log(factorial(5));

//Conversos de dolares a reales
 function conversorDivisas (monto) {
    reales = monto * 4.80;
    return reales;
 }
console.log(conversorDivisas(3));

//Calcular area y perimetro de sala rectangular
function calcularAreaYPerimetro (ancho, largo) {
    area = ancho * largo;
    perimetro = (ancho*2) + (largo*2);
    mensaje = `El area de la sala es ${area} y el perimetro es ${perimetro}`;
    return mensaje;
}

console.log(calcularAreaYPerimetro(5,4));

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);