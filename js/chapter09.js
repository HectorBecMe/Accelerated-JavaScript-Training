// WINDOW OBJECT
console.log('\nWINDOW OBJECT>>>');
console.log(window);
console.log(window.innerWidth);
console.log(innerWidth);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
localStorage.setItem('key1', 1000);
console.log(localStorage.getItem('key1'));
sessionStorage.setItem('key1', 1000);
console.log(sessionStorage.getItem('key1'));
console.log(window.location);
console.log(window.document);
//window.open('http://www.google.com');


// LOCATION OBJECT
console.log('\nLOCATION OBJECT>>>');
console.log(location);
console.log(location.hostname);
console.log(location.pathname);
// location.reload();
//location.replace('https://www.google.com');


// THE DOCUMENT OBJECT AND HOW TO INTERACT WITH IT
console.log('\nTHE DOCUMENT OBJECT AND HOW TO INTERACT WITH IT>>>');
console.log(document);
console.log(document.URL);
console.log(document.title);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[1].textContent);
document.body.children[1].textContent = 'Something else!!';
document.body.children[1].style.backgroundColor = 'red';

console.log(document.body.children[0].children[0]);
document.body.children[0].children[0].style.backgroundColor = 'blue';


// TRAVERSING THE DOM
console.log('\nTRAVERSING THE DOM>>>');
// THE LONG WAY
console.log(document.body.children[0].children[0]);

// THE BETTER WAY
console.log(document.body.lastElementChild);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);
console.log(document.body.firstElementChild.firstElementChild.parentElement);


// SELECTING ELEMENTS
console.log('\nSELECTING ELEMENTS>>>');
// ANOTHER BEST WAY
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('simple'));
console.log(document.getElementById('Link2'));
console.log(document.getElementsByName('Link3'));


