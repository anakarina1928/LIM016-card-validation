# Tarjeta de crédito válida

#

## Proyecto 1

* Construir una aplicación web que le permita al usuario validar un numero de tarjeta de crédito.
*  Debe tener la funcionalidad que oculte todos los digitos de la tarjeta menos los ultimos 4 digitos.
*  La temática es libre, yo elegí un plan de alimentación que el usuario pueda comprar como un paquete.
*  pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?).

***

## 1. Puntos para definir el producto. Antes de iniciar con el proyecto  debo entender los siguientes interrogantes :

### 1.1 Quines son los principales usuarios del producto?

* Hombres y mujeres, que sean adultos entre 30 y 50 años.
* Que trabajen en casa o que pasen mucho tiempo en ella.
* Que estén en la busqueda de crear habitos saludables.
* Que tenga la necesidad de organizar sus comidas del dia a dia para ahorra tiempo.

### 1.2 Cuales son los objetivos de esos usuarios en relacion con tu producto?

* Mejorar la calidad y estilo de vida de nuestros usuarios.
* Lograr que las personas logren un cambio en su salud y su peso.
* Fomentar los buenos habitos y desarrollar un entorno agradable con otras personas.
* Ahorrar tiempo sin tener que estar pensado o investigando sobre alimentacion saludable.
* La necesidad de sentir satisfacción de que quiere hacer algo mas que solo  trabajar (asi como cuando pagas el gym pero no vas).

### 1.3 Como crees que el producto que estas creando resuelve sus problemas?

"vidaSana" ofrece una suscripcion de un mes  que contiene una amplia variedad de recetas saludables para un menu completo toda la semana, ademas  la plataforma ofrece diferentes actividades de manera online como clases de yoga, club de lectura, entre otros. Creando una comunidad virtual con personas que quieren lograr los mismo cambios alimenticios.  

Dadas las condiciones actuales en el mundo, cada dia hay mas personas buscando alternativas por medio de la tecnologia, desarrollando su hobbies, sus talentos, y sus habitos por medio de ella. 

Las personas pasan mas tiempo en casa y eso ha hecho que caigan en el sedentarismo, muchos descuidando su alimentacion, afectando su estado de animo y su salud fisica. Además, son cada vez más las enfermedades y condiciones médicas que son producto de la mala alimentación,  por lo cual la población está siguiendo cada vez más la tendencia de cuidar la forma en que se alimenta.

[nombre del producto] da la oportunidad al usuario no solo de mejorar su alimentacion facilitando diversos menus creativos y saludables para 

su semana, dando facilidad y consejos practicos para su preracion, sino que lo invitamos a ser parte de una comunidad, donde podra de manera online interactauar con otras personas que buscan  los mismo intereses de un estilo de vida mas saludable, tomando en cuenta nuestras diversas actividades extras como clases de Yoga, club de lectura y mas.


## 2. Prototipo de baja fidelidad.

![1633531666745 (1).jpg](https://s3*us*west*2.amazonaws.com/secure.notion*static.com/34f1693d*1289*47ed*bf68*ac5551e9efa5/1633531666745_(1).jpg)

## Modelo 1 de la pagina principal extraido de canva para comprar sus paquetes de uso:
![Untitled](https://s3*us*west*2.amazonaws.com/secure.notion*static.com/8efc51df*0c7d*4b40*82ee*28f104f3b9da/Untitled.png)

Pagina 2 del modelo 1

![Untitled](https://s3*us*west*2.amazonaws.com/secure.notion*static.com/83e9da7b*08a7*4989*9df3*b497eef78206/Untitled.png)

pagina 3 del modelo 1 

![Untitled](https://s3*us*west*2.amazonaws.com/secure.notion*static.com/7d2c54a4*4efe*41ac*a395*20492efba298/Untitled.png)

## 3. Validación de tarjeta de credito.

El algoritmo de Luhn, también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

### Este algoritmo es simple. 

 Pasos:

* Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0*9])

* Si este número es mayor o igual a 10, debemos sumar los dígitos del resultado

* El número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

*Debemos verificar que el resultado de la suma sea divisible por 1

## Problema 1 : validar una tarjeta de credito

  ### Definicion de mi funcion:

    1* Dentro de mi objeto (validator) debo declarar una funcion que es "isValid", esta funcion tiene un parametro que tiene como nombre creditCardNumber el cual es de tipo String. 

    2* Debo hacer que retorne un valor boolenao  que indique si la tarjeta es valida o no de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

  ## Resolucion del problema:

 *  Creo un ciclo para recorrer nuestro String.
  
  *  Luego usamos condicionales para poder ubicar las posiciones pares y multiplicar los elementos    que ahi se encuentran por 2.
  
   *  Si la condicion no se cumple dejamos el elemento tal cual como esta  (no lo multiplica).
     
   *  Para sumar los numeros mayores a 10 utilizamos nuevamente un ciclo para recorrer mi arreglo.
     
   *  Uso condicionales para ubicar los elementos que sean mayores a 10.

## Problema 2: Ocultar con un (#) los digitos de la tarjeta de credito menos los ultimos 4.

## Definicion de mi funcion2:

* dentro de mi objeto validator debo declarar una funcion que se llamara "maskify"  esta funcion tiene un parametro que tiene como nombre creditCardNumber que es de tipo string que debe contener el numero de tarjeta de credito.

* debo hacer que todos los caracacteres del string se remplacen con numeral(#).

* los ultimos 4 caracteres si deben aparecer, asi sea de menor longitud.

### Resolucion de problema:

* A todos los numeros que ocupan una posicion en mi arreglo los debo reemplazar con numerales(#)

* Debo pasar mi string a un arreglo 

* Debo contar los digitos que se encuentran en las posiciones  de mi arrays, por cada ciclo debo reemplazar sus elementos pot (#).

* Los ultimos 4 digitos de mi tarjeta deben parmanecer igual. 

* Debo convertir mi arreglo a un string otra vez.  
