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


// EVENT BEHAVIOR AND PROPERTIES AND PROPAGATION ORDER
console.log('\nEVENT BEHAVIOR AND PROPERTIES AND PROPAGATION ORDER>>>');
var inner = document.querySelector('#inner');

inner.addEventListener('click', innerListener);
function innerListener(event) {
  console.log(event.bubbles);  
  event.stopPropagation();
  console.log(event.target);
  event.target.style.backgroundColor = 'red';
  console.log(event.clientX, event.clientY);
  console.log('Clicked inner!');
}

var outer = document.querySelector('#outer');
outer.addEventListener('click', outerListener);
function outerListener(event) {
  console.log('Clicked outer!');
}
