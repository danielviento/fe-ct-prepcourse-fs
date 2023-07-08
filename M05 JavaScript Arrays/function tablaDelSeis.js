function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

 var creaArray=[];
 for(let i=0; i<=60; i++){
   creaArray.push(i);
 };
 //console.log(creaArray);
sixArray=creaArray.map((num)=>{
   // no hay que declarar sixArray  la genera el metodo.map
   return num*6;
});

return sixArray;
};
console.log(tablaDelSeis());