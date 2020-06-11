'strict mode';

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  console.log(searchCity.value);

  var cityName = searchCity.value;
  if (cityName.trim().length == 0) {
    return alert('Please enter a City Name');
  }

  var http = new XMLHttpRequest();
  var apikey  = 'c3b811062d9b2c5e20feaa709667f4f7';

  url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apikey;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200){
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
      weatherData.temperature = data.main.temp;
      console.log(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert('Someting went wrong!');
    }
  };
  http.send();
}
