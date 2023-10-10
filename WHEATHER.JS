let date = document.getElementById("city-date");
console.log(date);
const crtDate = new Date().toDateString();
date.innerText = crtDate;

/* <============== API Handling ==============> */

const weatherapi = {
  key: "f26fae6b7a7f791994c387e8b43996a9",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?",
};

let city = "";
const search = document.getElementById("search");
search.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    city = event.target.value;
    search.value = "";
    getWeatherReport(city);
  }
});

document.getElementById("search").focus();

function getWeatherReport(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f26fae6b7a7f791994c387e8b43996a9&units=metric`
  )
    .then((weather) => {
      return weather.json();
    })
    .catch((error) => {
      alert("You Entered the Wrong City Name");
    })
    .then(showWeatherReport);
}

function showWeatherReport(weather) {
  if (weather.message == "city not found") {
    alert("You entered the wrong city name");
    search.value = "";
    return;
  }

  let mintemp = weather.main.temp_min;
  let max = weather.main.temp_max;
  let crtdate = new Date().toDateString();

  let country = weather.sys.country;
  let temp = weather.main.temp;
  let cloud = weather.weather[0].description;
  let name = weather.name;

  displayData(name, crtdate, temp, mintemp, max, cloud);
}

let cityname = document.getElementById("city-name");
let temperature = document.getElementById("crt_temp");
let mintemperature = document.getElementById("min-temp");
let maxtemperature = document.getElementById("max-temp");
let cloud = document.getElementById("cloud");

function displayData(city, crtdate, temp, mintemp, max, cloudy) {
  cityname.innerText = city.toUpperCase();
  date.innerText = crtdate.toUpperCase();
  temperature.innerText = temp + `°`;
  mintemperature.innerText = mintemp + `°`;
  maxtemperature.innerText = max + `°`;
  cloud.innerText = cloudy.toUpperCase();

  // Adjusting background based on weather description
  if (cloudy.includes("cloud☁️")) {
    document.body.style.backgroundImage = "";
  } else if (cloudy.includes("clear☀️")) {
    document.body.style.backgroundImage = "";
  } else if (cloudy.includes("haze🌥️")) {
    document.body.style.backgroundImage = "";
  } else if (cloudy.includes("mist🌨️")) {
    document.body.style.backgroundImage = "🌨️";
  }
}
