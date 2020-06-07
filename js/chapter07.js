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


