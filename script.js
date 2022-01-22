// // Feature 1
// let h2 = document.querySelector(".sub-title");
// let date = new Date();
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = days[date.getDay()];
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

// function dateAndTime() {
//   if (hour < 10) {
//     hour = `0${hour}`;
//   }
//   if (hour < 12) {
//     h2.innerHTML = `${day}, ${hour}:${minutes} AM EST`;
//   } else {
//     h2.innerHTML = `${day}, ${hour}:${minutes} PM EST`;
//   }
//   if (minutes < 10) {
//     minutes = `0 ${minutes}`;
//   }
// }

// // dateAndTime();

// // Feature 2
// let search = document.querySelector("#form");
// let locationInput = document.querySelector("#location-input");
// let title = document.querySelector(".title");

// function cityName(event) {
//   event.preventDefault();
//   title.innerHTML = locationInput.value;
//   title.toUpperCase().replace().trim();
// }
// search.addEventListener("submit", cityName);

// // Feature 3
// let temp = document.querySelector("#temp");
// let celsius = document.querySelector("#celsius");
// let fahrenheit = document.querySelector("#fahrenheit");

// function celsiusTemp(event) {
//   event.preventDefault();
//   temp.innerHTML = 25;
// }

// function fahrenheitTemp(event) {
//   event.preventDefault();
//   temp.innerHTML = 10;
// }
// fahrenheit.addEventListener("click", fahrenheitTemp);
// celsius.addEventListener("click", celsiusTemp);

function displayTemperature(response) {
  let temperatureEl = document.getElementById("temperature");
  temperatureEl.innerHTML = Math.round(response.data.main.temp);
  let cityEl = document.getElementById("city");
  cityEl.innerHTML = response.data.name;

  let descriptionEl = document.getElementById("description");
  descriptionEl.innerHTML = response.data.weather[0].description;
  let humidityEl = document.getElementById("humidity");
  humidityEl.innerHTML = response.data.main.humidity;
  let windEl = document.getElementById("wind");
  windEl.innerHTML = Math.round(response.data.wind.speed)
}

let apiKey = "f4d989e0a37469e143375a913c800d40";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);