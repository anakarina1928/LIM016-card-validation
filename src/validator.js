//validator es un objeto literal.
const validator = {
  //manera de declarar un metodo dentro de un objeto (:).
  isValid : function(creditCarNumber) { // funcion anonima
    let cardNumber = creditCarNumber.split('');// creo una variable y pasa un string a un arreglo.
    let arrayResult = cardNumber.reverse();// le doy la reversa a mi arreglo.
    
    // cree un ciclo para primero recorrer la longitud de mi arreglo.
    for (let counter = 0; counter < arrayResult.length ; counter++) {
     
      /*luego uso condicionales para poder ubicar las posiciones impares sin contar el cero y multiplicar por dos los elementos 
        que se encuentran en las posiciones pares*/
      if ( counter % 2 !== 0) {
        
        /* declaro una varible para guardar el elemento multiplicado por dos que se encuentra en la 
        posiscion par.*/
        let number = arrayResult[counter] * 2;
        arrayResult[counter] = number;//guardo mi resultado en mi arreglo.
        
      } else { // si la condicion de if no se cumple, dejamos el elemento tal cual como esta, no lo multiplicamos.
        arrayResult[counter] = parseInt(arrayResult[counter]);
        /* Como estoy dejando mi elemento tal como se encuentra en mi string estoy utilizando la función parseInt
         analiza una cadena y devuelve un entero. */
      }
    }
    let sum = 0;
    //console.log(arrayResult);
    
    // creo otro ciclo para recorrer mi arreglo.
    for (let counterTwo = 0; counterTwo < arrayResult.length; counterTwo++){
      
      /* Uso condicionales para ubicar los elementos que sean mayores o iguales a 10, ya que necesito dividir
      sus digitos y sumerlos para que den un numero menor a 10*/
      if (arrayResult[counterTwo] >= 10) {
        // declaro una varible nomber  para guardar el elemento que sea mayor a 10.
        let number = arrayResult[counterTwo];
        
        /*Si divides un numero mayor o igual a 10 el resultado de esa division te dara los primeros digitos
        y el ultimo digito te lo dara el residuo de esa division. */
        
        let digit1 = Math.trunc(number / 10);/* para separar los numeros estoy dividiendo para obtener el dividendo 
        que sera el primer digito,estoy utilizando el metodo Math.trunc ya que en JS las divisiones no son
        enteras.*/
        let digit2 = number % 10;// aqui obtengo mi residuo que sera el ultimo digito del numero que estoy dividiendo.
        let result = digit1 + digit2;//sumo el resultado. 
        arrayResult[counterTwo] = result;//guardo mi resultado en mi arreglo.
       
      }

      sum += arrayResult[counterTwo];
      //console.log(counterTwo,sum);
      
    } 
    //console.log(arrayResult);
    
    return sum % 10 === 0;// aqui tengo mi valor resultante al llevar a cabo mi funcion.

  },//con la coma indico que tengo otro elemento dentro de mi objeto, en este caso es maskify que es un metodo.

  maskify: function (creditCarNumber) {
    let arrayHidden = Array.from(creditCarNumber);/*estoy convirtiendo mi string en un arreglo a traves del metedo 
    from que es un metodo de mi objeto arrays.*/
    let size = arrayHidden.length;//guardo en una talla (nombre pequeño) en un varieble la longitud de mi arreglo.
    
    for (let counterthree = 0; counterthree < size - 4; counterthree++){
      
      arrayHidden[counterthree] = '#';/* cada que se complete un ciclo  se reemplaza el elemento de mi arreglo
       en la posicion donde se encuentre mi contador por un numeral(#). */
      //console.log(counterthree,arrayHidden[counterthree]);

    }
    return arrayHidden.join(''); //estoy haciendo un return de mi arreglo pasandolo a un string.


  }
}


export default validator;
//Aqui estamos exportando el objeto validator para poder usarlo en otras partes de la aplicacion.
//Para usarlo debemos utilizar la palabra reservada import y lo hacemos de la siguiente manera:
//import validator from 'la ruta donde se encuentra este archivo'

//let result = validator.maskify('4');
//console.log(result);