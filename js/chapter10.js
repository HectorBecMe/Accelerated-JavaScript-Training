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


