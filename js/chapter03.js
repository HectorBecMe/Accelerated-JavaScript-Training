// PRIMITIVE VS REFERENCE TYPES EXERCISE
console.log('\nPRIMITIVE VS REFERENCE TYPES EXERCISE>>>');
// PRIMITIV TYPES
var aNumber = 5;
console.log(aNumber);

var anotherNumber = aNumber;
console.log(anotherNumber);

aNumber = 12;
console.log(aNumber);

console.log(anotherNumber);

// REFERENCE TYPES
var array = [1,2,3];
console.log(array);

var anotherArray = array;
console.log(anotherArray);

array.push(4);
console.log(array);
console.log(anotherArray);

var array = [1,2,3];
var anotherArray = array;

array = ['a', 'b'];
console.log(array);
console.log(anotherArray);


// GLOBAL VS LOCAL SCOPE EXERCISE
console.log('\nGLOBAL VS LOCAL SCOPE EXERCISE>>>');
var test = 'Global scope';
function localScope() {
  var test = 'Local scope';
  console.log(test);
}
localScope();
console.log(test);

// JS auto Define una variable GLOBAL
// cuando detecta asignacion de varisables
// sin definicion previa.
function localScope() {
  testAutoDefine = 'Local scope';
  console.log(testAutoDefine);
}
localScope();
console.log(testAutoDefine);
