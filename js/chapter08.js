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


// THE MATH OBJECT
console.log('\nTHE MATH OBJECT>>>');
var pi = Math.PI;
console.log(pi);

var e = Math.E;
console.log(e);

var a = -4;
console.log(Math.abs(a));

a = 1.99;
console.log(Math.round(a)); // Redondeo al entero mas CERCANO
console.log(Math.ceil(a)); // Redondeo al entero SUPERIOR
console.log(Math.floor(a)); // Redondeo al entero INFERIOR

a = 2;
console.log(Math.exp(a));
console.log(Math.log(e));

console.log(Math.max(1,100,1000));

console.log(Math.random());

var rnd = Math.floor(Math.random() * 100) + 1;
console.log(rnd);


