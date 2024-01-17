
// -> Arrays y condicionales

// Vamos a declarar 3 arrays y queremos saber la longitud de cada uno de ellos.
var avengers = ['Spiderman', 'AntMan', 'Hulk'];
var mutants = ['Wolverine', 'Ciclops', 'Storm'];
var defenders = ['Daredevil', 'IronFist', 'Luke Cage'];
// Para ello declaremos una function -> por parametro le entra una lista
var calcListLength = (list) => {
    // Declaramos el contador que irá sumando el valor de cada uno de los elementos de la lista
    var myLength = 0;
    // Recorremos los elementos de la lista
    list.forEach(element => {
        // Acumumlamos el valor de la lista
        myLength = myLength + element.length;
    });
    // Devolvemos 
    return myLength;
}
// Llamamos a nuestras funciones y asignamos el valor de retorno
var avengersLength = calcListLength(avengers);
var mutantsLength = calcListLength(mutants);
var defendersLength = calcListLength(defenders);

// Declaramos una funcion comparador para saber cual de los tres arrays es el mayor
var comparator = (a,b,c) => {
    if (a > b) {
        if (a == c)
          return 'Empate entre a y c';
        if (a > c)
          return 'a gana';
        else
          return 'c gana';
      } else {
        if (a == b)
          return 'Empate entre a y b';
        if (b > c)
          return 'b gana';
        else
          return 'c gana';
      }
}
// le pasamos las longitudes de nuestros arrays y nos devolverá el elemento mayor-> el c
console.log(comparator(avengersLength,mutantsLength, defendersLength));

//Ahora vamos a añadir la media de la longitud de los elementos de nuestra lista
var media = (a,b,c) => {
    return a+b+c / 3
}
// Le pasamos a nuestra media los valores
console.log(media(avengersLength,mutantsLength, defendersLength));



//->Ejercicio 1
//Devuelve el string de mayor longitud


// Declaramos un array -> Cambiar nombre de myArray al vuestro e introducimos valores
var myArray = ['Apple', 'Samsung', 'Xiaomi', 'Huawei'];
// Declaramos una variable donde guardaremos el string mayor de nuestro myArray
var longestElement= '';
// PRIMERA ITERACIÓN: Recorrer el Array y comprobar la longitud de cada uno de ellos.
myArray.forEach( (element) => {
    // SEGUNDA ITERACIÓN: Si longestElement es mayor a relement cambiamos el valor de longestElement
    if (longestElement.length < element.length) {
        longestElement = element
    }
});
// TERCERA ITERACIÓN MOSTRAR EL ELEMENTO MAYOR
console.log(longestElement);

 

//->Ejercicio 2
//Devuelve si puedes conducir

const age = 20
if (age >= 18) {
    console.log("Puedes conducir");
}else{
    console.log("No puedes conducir");
}

//->Ejercicio 3
//Quiero comer Pizza

// PRIMERA ITERACIÓN: Declara variable con un listado de comidas

// SEGUNDA ITERACIÓN: Recorrer el listado de comidas

// TERCERA ITERACIÓN: Si hay pizza me sirves pizza 

// CUARTA ITERACIÓN: Declara variable estoy a dieta

// QUINTA ITERACIÓN: Cuando quiera pizza me sirves brocoli

const food = ["macarrones", "tortilla", "pizza", "brocoli"]
const myFood = "pizza"
const diet = "estoy a dieta"
for (let i = 0; i< food.length; i++) {
    if (diet ==="estoy a dieta" && food[i] === myFood) {
        console.log("Lo siento, estoy a dieta. Me sirves brócoli en lugar de pizza.")
          }else if (food[i] === myFood) {
        console.log(`Me sirves ${myFood}`);   
    }
}


//_>Ejercicio 3
//* → E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R


// PRIMERA ITERACIÓN: Declara variable con 'El rayo es el mejor'

// SEGUNDA ITERACIÓN: Pasa ese texto a mayúsculas -> MDN es vuestro amigo

// TERCERA ITERACIÓN: Modifica el string -> to array MDN 

// CUARTA ITERACIÓN: Añade un '-' después de cada elemento

// Devuelve en un string E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R

let textOriginal = "El rayo es el mejor"

function iteraciones(texto) {

  let resultado = texto
  resultado = resultado.toUpperCase()
  console.log(resultado);
  resultado = resultado.split('')
  console.log(resultado);
  resultado = resultado.join('-');
  console.log(resultado);

  return resultado
}

let resultadoFinal = iteraciones(textOriginal);
console.log(resultadoFinal);

//-> Ejercicio 4
// → La piramide - imprime por consola:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (let i = 1; i <= 9; i++) {
  let linea = ''
  for (let j = 1; j <= i; j++) {
    linea += i;
}
console.log(linea)
}

//-> Ejercicio 5
// La piramide Invertida- imprime por consola:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

for (let i = 9; i >= 1; i--) {
  let inversa = '';
  for (let j = 9; j >= i; j--) {
      inversa += i;
  }
  console.log(inversa);
}


