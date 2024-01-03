/*

CLASES
Las clases son funciones constructoras y siempre las vamos a iniciar con mayúsculas
ejemplo: new String();
*/

/*
Clase Primitivas
*/

// Class String
var string = new String("Esto es un string")
console.log("string " + string);

//class Number
var number = new Number(12);
console.log("numero " + number);

//Classs Boolean
 var boolean = new Boolean(false);
 console.log("boolean " + boolean);

//Class Array 
var array = new Array("rojo" , "amarillo" , "verde");
console.log("array" , array);

//Class Object
var object = new Object({ nombre : "Maura",
                         edad : 23})
console.log("object" + object);

//Clases creadas por el programador
function Personas(){
    //Propiedad Pública
 this.nombre;
 this.edad;
}

var yo = new Personas();
 yo.nombre = "Juan";
 yo.edad = "20";
 console.log("yo" , yo);

 // Clases con Parámetros
 function Animales(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
    
 }

 var mascota = new Animales("Perro", "Pitbul")
 console.log("mascota", mascota)