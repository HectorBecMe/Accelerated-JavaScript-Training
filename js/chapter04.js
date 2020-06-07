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

array.unshift('NUEVO'); // New element at beginning of Array
console.log(array);


