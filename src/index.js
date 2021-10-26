import validator from './validator.js';
//Aqui estamos importando el objeto validator que estamos exportando desde de Js validator.js

const buttonValidator = document.getElementById('validar');
/*Con la varieble ya creada donde tengo mi boton,  agrego un escuchador del evento "click",
   con un parametro de funcion anonima que se ejecutara cuando suceda  el evento click presionando 
   el botón  "Obten prueba gratis".*/

buttonValidator.addEventListener('click', function () {
    
    const cardNumber = document.getElementById('tarjeta').value;/* estoy obteniendo por medio del DOM el
     input tipo text, donde extraigo su valor que en este caso es el numero de la tarjeta.*/
   
    if (cardNumber.length === 0) { /* si la longitud de mi tarjeta es igual a cero no se podra aejecuar
        ninguca validacion*/ 
        
        document.getElementById('error').innerHTML = "Ingresa un número de tarjeta";/*con innerHTML
        le asigno un dato de tipo string a mi id error  */

        return;
    }
    
    const isAValidCard = validator.isValid(cardNumber); //guardo en una variable mi funcion isvalid
    const cardHidden = validator.maskify(cardNumber);//guardo en una variable mi funcion maskify
    
    if (isAValidCard) {/* Uso el if-else para verificar una condicion, en este caso la validacion de mi 
        tarjeta*/
        document.getElementById("numero1").textContent =
            'Número de tarjeta: ' + cardHidden;
        document.getElementById('exitosa').style.display = 'block';
        document.getElementById('correcto').style.display = 'block';//mostramos
        document.getElementById('incorrecto').style.display = 'none';//ocultamos
        document.getElementById('general').style.display = 'none';
        document.getElementById('imagen').style.display = 'none';
    } else { 
        document.getElementById('numero2').textContent = 'numero de tarjeta invalido: '
        + cardHidden;
        document.getElementById('incorrecto').style.display = 'block';//mostramos
        document.getElementById('correcto').style.display = 'none';//ocultamos
        document.getElementById('general').style.display = 'none';
        document.getElementById('imagen').style.display = 'none';
        
    }



});

// guardo mis botones  de reinicio en dos variables
const buttonReinicio = document.getElementById('reinicio1');
const buttonReinicio2 = document.getElementById('reinicio2');

function reload() {
    location.reload();
}

buttonReinicio.addEventListener('click', reload);
buttonReinicio2.addEventListener('click', reload);
   










