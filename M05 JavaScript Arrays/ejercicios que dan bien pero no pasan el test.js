//el ejercicio da bien pero no pasa el test================================
var suma=0;
var nums=[2,6,8,10];
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
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

var notas=[8, 7, 9, 10, 8];
var sum=0;
var cuantasNotas=0;
function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
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
