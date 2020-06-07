// TIMERS INTERVALS
console.log('\nTIMERS INTERVALS>>>');
setTimeout(function(){
  console.log('Timeout NOW!');
}, 1000);

var interval = setInterval(function(){
  console.log('Ping!');
}, 500);

setTimeout(function(){
  clearInterval(interval);
}, 2500);


