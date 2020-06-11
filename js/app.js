'strict mode';

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  console.log(searchCity.value);

  var cityName = searchCity.value();
  if (cityName.trim().length == 0) {
    return alert('Please enter a City Name');
  }

  var http = new XMLHttpRequest();
  var apikey  = 'c3b811062d9b2c5e20feaa709667f4f7';

  url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apikey;
  var methos = 'GET';

  http.open(method, url);
  http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200){

    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert('Someting went wrong!');
    }
  };
}
