// SETUP AND SENDING A GET REQUEST
console.log('\nSETUP AND SENDING A GET REQUEST>>>');
var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'GET';

http.open(method, url);
http.onreadystatechange = function() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(JSON.parse(http.responseText));
    console.log(JSON.parse(http.responseText)[2].id);
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log('Error: ' + http.status);
  }
};
http.send();
 

