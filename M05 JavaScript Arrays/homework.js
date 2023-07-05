/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

var primerElem=[1, 2, 6, 4, 23];
function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   console.log(array[0]);
   return(array[0]);

};
//devolverPrimerElemento(primerElem);


var ultimoElem=[1, 2, 6, 4, 23];
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   console.log(array.length);
   var long=(array.length);
   console.log(array[long - 1]);
   return (array[long - 1]);
};
devolverUltimoElemento(ultimoElem);



var largo=[1, 2, 6, 4, 23];
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   console.log(array.length);
   return (array.length)
};
obtenerLargoDelArray(largo);

//==================================================

var sumando1=[2, 4, 6, 8, 10];
function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var long= array.length;
   for( let i=0; i<long; i++){
      array[i]=array[i]+1;
      console.log(array[i]);
      
   };
   return array;
   
};
incrementarPorUno(sumando1);
console.log(sumando1)

//==================================================


var itemMas=[2, 4 ,6 ,8];
function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento);
   console.log(array);
   return array;
};
agregarItemAlFinalDelArray(itemMas,10)

//======================================================

var itemCom= [2, 3, 4, 5, 6];
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   console.log (array);
   return array;
};
agregarItemAlComienzoDelArray(itemCom, 1);

//==========================================================

var palabras=['hola', 'como' , 'estas', '?'];
function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var concatenadas=palabras.join(' ');//el espacio ' ' une los elementos con un espacio
   console.log(concatenadas);
   return concatenadas;
};dePalabrasAFrase(palabras);

//=============================================================

var preguntoSiExiste=[10, 20, 34, 66, 100];
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   var verifica=array.includes(elemento);
   if (verifica===true){
      console.log(verifica);
      return true;
   }else{
      console.log(verifica);
      return false;
   };

}; arrayContiene(preguntoSiExiste, 67);

//================================================================


var nums=[2,6,8,10];
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma=0;
   var long=arrayOfNums.length;
   //console.log(long);
   for (let i=0; i<long; i++){// long lo habia puesto entre parentesis y no hacia falta
    //console.log(arrayOfNums[i]);// para acceder a un elementoo del array tengo que ponerlo entre corchetes
        suma += arrayOfNums[i]; // la variable suma tenia que declararla antes del loop
   }
   console.log(suma);
   return suma;
}
 agregarNumeros(nums);

//===================================================================================
//hasta aca ok 19/6 23:42
var notas=[8, 7, 9, 10, 8];
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sum=0;
   var cuantasNotas=0;
    cuantasNotas=resultadosTest.length;
    console.log("cantidad de notas " + cuantasNotas);
    for (let i=0; i<cuantasNotas; i++){
      sum+=resultadosTest[i];
}
    console.log("esta es la suma " +sum);
   console.log("promedio " + (sum/cuantasNotas));
   var promedio=sum / cuantasNotas;
   return promedio;
}
promedioResultadosTest(notas);


//================================================================


var grande=[10,9,25,6];
function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   biggestNum=0;
   biggestNum=Math.max(...arrayOfNums);
   console.log(biggestNum);
   return biggestNum;

};
numeroMasGrande(grande);

//==============================================================

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
var totalMul=1; //va 1 porque sino todo numeo mult por 0 es =0

   if (arguments.length===0){
      console.log('sin argumentos ' + arguments.length);
      return 0;
   };

   if (arguments.length===1){
      console.log('solo un argumento ' + arguments.length);
      return arguments[0];
   };
   
for(var i=0; i<arguments.length; i++){
 totalMul = (totalMul * arguments[i]);
} 
console.log(totalMul);
console.log(arguments[5])
return totalMul;
}
multiplicarArgumentos(3,5,4,10,6,9);


//===============================================================

//=========================================================
function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
