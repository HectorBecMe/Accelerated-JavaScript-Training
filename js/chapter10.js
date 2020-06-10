// EVENT HANDLERS
console.log('\nEVENT HANDLERS>>>');

window.onload = function () {
  console.log('Window loaded!');
};

var btn = document.querySelector('button');

btn.onclick = function () {
  console.log('Button Clicked!');
};

btn.onclick = function () {
  console.log('Also Clicked!');
};


// EVENT LISTENERS
console.log('\nEVENT LISTENERS>>>');
var btn = document.querySelector('#btn');

function listener1() {
  console.log('Listener 1...');
}

function listener2() {
  console.log('Listener 2...');
}

btn.addEventListener('click', listener1);
btn.addEventListener('click', listener2);

setTimeout(function() {
  btn.removeEventListener('click', listener1);
}, 5000);


