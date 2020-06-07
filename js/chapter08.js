// TIMERS INTERVALS
console.log('\nTIMERS INTERVALS>>>');
/*setTimeout(function(){
  console.log('Timeout NOW!');
}, 1000);

var interval = setInterval(function(){
  console.log('Ping!');
}, 500);

setTimeout(function(){
  clearInterval(interval);
}, 2500);*/


// TRANFORMING FORMATS VALUES
console.log('\nTRANFORMING FORMATS VALUES>>>');
var a = '5';
console.log(typeof a);
console.log(a);

console.log(typeof parseInt(a));
console.log(parseInt(a));

a = 'FBB123';
console.log(parseInt(a, 16));

a = 10;
console.log(typeof a.toString());
console.log(a.toString());

a = 10.3;
console.log(a.toFixed());
console.log(a.toFixed(2));


// STRING FUNCTIONS
console.log('\nSTRING FUNCTIONS>>>');
var string = ' Any text';

console.log(string.length);
console.log(string[3]);
console.log(string.charAt(3));
console.log(string.concat(' ...add a new string'));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.split(' '));
console.log(string.trim());


