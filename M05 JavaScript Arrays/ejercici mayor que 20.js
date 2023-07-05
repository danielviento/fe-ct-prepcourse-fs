function cuentoElementos(...arraya) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    
    var qty=0;
    /*for(var i=0; i<arraya.length ;i++){
       if (arraya[i] > 18){
          qty =qty + 1;
         // console.log(qty);
       }
    }*/
    arraya.forEach(element=>{
       if (element>18){
         qty=qty+1;
       }
    });
 
    console.log(('el total de numeros mayores de 18 es ') , qty);
    return qty;
    
 };
  cuentoElementos(1,78,98,56,34,3,2,1);