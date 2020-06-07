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


