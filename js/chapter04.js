// BASICS MANAGING ELEMENTS
console.log('\nBASICS MANAGING ELEMENTS>>>');
var array = [1,2,3];
console.log(array.length);

console.log(array);
console.log(array[2]);
console.log(array[3]);

array[1] = 100;
console.log(array);

array[3] = 33;
console.log(array);

array[5] = 100;
console.log(array);


// THE FOREACH METHOD
console.log('\nTHE FOREACH METHOD>>>');
var array = [1,2,3];
array.forEach(function(element){
  console.log(element);
});


// WORKING WITH ELEMENTS PUSH POP UNSHIFT AND SHIFT
console.log('\nWORKING WITH ELEMENTS PUSH POP UNSHIFT AND SHIFT>>>');
var array = [1,2,3,,];
array.push(9); // New element at end of Array
console.log(array);

array.pop(); // Remove last element
console.log(array);

array.shift(); // Remove first element
console.log(array);

array.unshift('NEW'); // New element at beginning of Array
console.log(array);


// WORKING WITH PARTS OF AN ARRAY INDEXOF SPLICE AND SLICE
console.log('\nWORKING WITH PARTS OF AN ARRAY INDEXOF SPLICE AND SLICE>>>');
// INDEXOF
var array = ['NEW',1,2,3,4];
console.log(array.indexOf('NEW'));
array[array.indexOf('NEW')] = 'OLD';
console.log(array);

// SPLICE
var newArray = array.splice(3); // INDEX INICIAL, HASTA EL FINAL
console.log(newArray);
console.log(array);

var array = ['OLD',1,2,3,4];
var newArray = array.splice(2,2); // INDEX INICIAL, NUMERO ELEMENTOS
console.log(newArray);
console.log(array);

// SLICE
var array = ['OLD',1,2,3,4];
var newArray = array.slice(1,3); // INDEX INICIAL, INDEX FINAL SIN INCLUIRLO
console.log(newArray);
console.log(array);


// FILTERING MAPPING AND REVERSING ARRAY ELEMENTS
console.log('\nFILTERING MAPPING AND REVERSING ARRAY ELEMENTS>>>');
// FILTER ARRAY
var array = ['OLD',1,2,3,4];
var filteredArray = array.filter(function(value){
  return value > 2;
});
console.log(filteredArray);

// MAP ARRAY
var mappedArray = array.map(function(value){
  return value * 2;
});
console.log(mappedArray);
console.log(array);

// REVERSE ARRAY
console.log(mappedArray.reverse());


