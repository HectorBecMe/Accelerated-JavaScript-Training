// VARIABLES BASICS
console.log('\nVARIABLES BASICS>>>');
// DEFINICION DE VARIABLES
// Asignacion number.
// En JavaScript numeros enteros
// y numeros flotantes, son number.
var variable = 5;
console.log(variable);
console.log(typeof variable);

// Asignacion string
var variable = 't';
console.log(variable);
console.log(typeof variable);

// asignacion boolean
var variable = true;
console.log(variable);
console.log(typeof variable);

// Nombre variables no puede comenzar con numero
// var 1variable = 6.5;

// asignacion de numero flotante
var variable1 = 6.5;
console.log(variable1);
console.log(typeof variable1);


// VARIABLES NULL UNDEFINED AND NAN
console.log('\nVARIABLES NULL UNDEFINED AND NAN>>>');
// asignacion de un array
var variable2 = [1, 2, 3, '4', ];
console.log(variable2);
console.log(typeof variable2);

// obtener valor de un array
console.log(variable2[2]);
console.log(variable2[4]);

// UNFEFINED
variable2 = undefined;
console.log(variable2);
console.log(typeof variable2);

// NULL vs UNDEFINED
variable2 = null;
console.log(variable2);
console.log(typeof variable2);

console.log(null == undefined);
console.log(null === undefined);

// NAN
variable2 = NaN;
console.log(variable2);
console.log(typeof variable2);


// VARIABLES OBJECTS
console.log('\nVARIABLES OBJECTS>>>');
// OBJETOS
var objeto = {
  name: 'Hec'
}
console.log(objeto);
console.log(objeto.name);
console.log(typeof objeto);


// STRICT MODE
console.log('\nSTRICT MODE>>>');
(function () {
  'use strict';
  console.log('this function is strict...');
}());

(function () {
  console.log('but this function is sloppy...');
}());


// DYNAMIC TYPING
console.log('\nDYNAMIC TYPING>>>');
var var1 = 5;
var Var1 = 10;
console.log(var1);
console.log(Var1);

var var2 = 5;
console.log(var2);
console.log(typeof var2);
var2 = '10';
console.log(var2);
console.log(typeof var2);


// HOISTING
console.log('\nHOISTING>>>');
// JavaScript primero busca 
// las declaraciones de variables inicializadas
usoAntes = 5;
console.log(usoAntes);
var usoAntes;


// FUNCTIONS CREATING AND CALLING THEM
console.log('\nFUNCTIONS CREATING AND CALLING THEM>>>');
function calc(){
  console.log('Inside function!');
}
calc();

// Tambien existe Hoisting para funciones
hola();
function hola(){
  console.log('Hola!!');
}
console.log(typeof hola);

// Inicializacion de variable con una funcion
var varFunction = function () {
  console.log('Inside varFunction');
};
varFunction();
console.log(typeof varFunction);

// Inicializacion de variablre con otra variable funcion
var anotherFunction = varFunction;
anotherFunction();

// Solo se ejecuta la funcion varFunction()
// al no tener un return anotherFunction2 continua siendo
// una variable.
var anotherFunction2 = varFunction();
// Al ser una variable e intentar ejecutarla como funcion
// se genera un error.
// anotherFunction2();
console.log(anotherFunction2);


// FUNCTIONS ARGUMENTS RETURNING DATA
console.log('\nFUNCTIONS ARGUMENTS RETURNING DATA>>>');
// Return value
function returnValue(){
  var stringVar = 'Value returned for returnValue';  
  return stringVar;
}
var returned = returnValue();
console.log(returned);

// Uso de argumentos
function adding(number1, number2){
  return number1 + number2;
}
var returned = adding(10, 8);
console.log(returned);

var calculator = adding;
console.log(calculator(15,2));


// CONTROL STRUCTURES IF STATEMENT
console.log('\nCONTROL STRUCTURES IF STATEMENT>>>');
var condition = 1;
var anotherCondition = false;
if (condition) {
  console.log('Executed!');
} else if (anotherCondition) {
  console.log('Still Executed!');
} else {
  console.log('Not Executed!');
}

// 1 se interpreta como TRUE, 
console.log(1 == true);
// pero no es TRUE porque 1 es number no BOOLEAN
console.log(1 === true);

// 0 se interpreta como FALSE, 
console.log(0 == false);
// pero no es FALSE porque 0 es number no BOOLEAN
console.log(0 === false);

// Cualquier numero diferente de 0 ó 1
// no puede ser interpretado coo BOOLEANAl 
var condition = 2;
var anotherCondition = false; // 0 = false
if (2) {
  console.log('Executed!');
} else if (anotherCondition) {
  console.log('Still Executed!');
} else {
  console.log('Not Executed!');
}

console.log(2 == true);
console.log(2 == false);

// Cualquier valor diferente de 0
// Al ser utilizado en una exprecion BOOLEANA 
// es interpertado como TRUE
console.log(2 != false);
console.log(2 != true);

// NULL es inperpretado como FALSE
var condition = null;
var anotherCondition = false; // 0 = false
if (condition) {
  console.log('Executed!');
} else if (anotherCondition) {
  console.log('Still Executed!');
} else {
  console.log('Not Executed!');
}


// CONTROL STRUCTURES SWITCH
console.log('\nCONTROL STRUCTURES SWITCH>>>');
var luckyNumber = 9;
switch (luckyNumber) {
  case 1:
    console.log('Is 1');
    break;
  case 9:
    console.log('Is 9');
    break;
  default:
    console.log('Default');
    break;
}


// CONTROL STRUCTURES SWITCH BREAK
console.log('\nCONTROL STRUCTURES SWITCH BREAK>>>');
switch (luckyNumber) {
  case 1:
    console.log('Is 1');
  case 9:
    console.log('Is 9');
  default:
    console.log('Default');
}


// CONTROL STRUCTURES FOR LOOP
console.log('\nCONTROL STRUCTURES FOR LOOP>>>');
for (var i=0; i<5; i++){
  console.log('en el for: ' + i);
}


// CONTROL STRUCTURES NESTED LOOPS
console.log('\nCONTROL STRUCTURES NESTED LOOPS>>>');
for (var i=0; i<5; i++){
  for (var j=0; j<2; j++){
    console.log('en el for anidado:  ' + i*j);
  }
}


// CONTROL STRUCTURES CONTROLLING LOOPS WITH BREAK CONTINUE
console.log('\nCONTROL STRUCTURES CONTROLLING LOOPS WITH BREAK CONTINUE>>>');
for (var i=0; i<5; i++){
  if (i == 1){
    break;
  }
  console.log('esperando el break: ' + i);
}

for (var i=0; i<5; i++){
  if (i == 1){
    continue;
  }
  console.log('esperando el continue: ' + i);
}

for (var i=0; i<5; i++){
  for (var j=0; j<2; j++){
    if (i==1) {
      continue; // Solo afecta el loop en el que se utiliza
    }
    console.log(i + '. inside inner loop, j = ' + j);    
  }
  console.log(i + '. outer loop');
}


// CONTROL STRUCTURES FOR LOOP VARIATIONS
console.log('\nCONTROL STRUCTURES FOR LOOP VARIATIONS>>>');
for (var i=2; i<5; i++){
  console.log('exprecion inicial diferente de 0: ' + i);
}

for (var i=2; i<5; i=i+3){
  console.log('con operacion en exprecion final: ' + i);
}

// Ocaciona un LOOP infinito
//for (var i=2; i<5; i--){
//  console.log('con operacion en exprecion final: ' + i);
//}

for (var i=2; i>1; i--){
  console.log('con decremento en exprecion final: ' + i);
}


