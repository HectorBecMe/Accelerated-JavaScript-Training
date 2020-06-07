// CLOSURES
console.log('\nCLOSURES>>>');
function generator(input){
  var number = input;
  return function() {
    return number * 2;
  };
}

var calc = generator(900);
var calcAnother = generator(1000);
console.log(calc);
console.log(calc());


// IMMEDIATELY INVOKED FUNCTION EXECUTIONS IIFES
console.log('\nIMMEDIATELY INVOKED FUNCTION EXECUTIONS IIFES>>>');
(function calc(input) {
  var number = input;
  console.log(number);
})(10);

var obj = {};
(function calc() {
  obj.name = 'Hec';
})(obj);
console.log(obj);


// BUILT IN METHODS PROPERTIES
console.log('\nBUILT IN METHODS PROPERTIES>>>');
function message(message) {
  console.log(message);

  console.log(arguments); // Arreglo con los parametros de la funcion
  console.log(arguments[2]);
  console.log(arguments.length); // Numero de parametros recibidos
}

message('Hi!', 10, 11, 20);
console.log('Function name: ' + message.name);

var msg = message;
console.log('Function name: ' + msg.name); // Nombre de la funcion
console.log(msg.length); // Numero de parametros esperados
