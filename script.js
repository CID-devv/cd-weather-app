// Feature 1
let h2 = document.querySelector(".sub-title");
let date = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[date.getDay()];
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

function dateAndTime() {
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (hour < 12) {
    h2.innerHTML = `${day}, ${hour}:${minutes} AM EST`;
  } else {
    h2.innerHTML = `${day}, ${hour}:${minutes} PM EST`;
  }
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
}

// dateAndTime();

// Feature 2
let search = document.querySelector("#form");
let locationInput = document.querySelector("#location-input");
let title = document.querySelector(".title");

function cityName(event) {
  event.preventDefault();
  title.innerHTML = locationInput.value;
  title.toUpperCase().replace().trim();
}
search.addEventListener("submit", cityName);

// Feature 3
let temp = document.querySelector("#temp");
let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");

function celsiusTemp(event) {
  event.preventDefault();
  temp.innerHTML = 25;
}

function fahrenheitTemp(event) {
  event.preventDefault();
  temp.innerHTML = 10;
}
fahrenheit.addEventListener("click", fahrenheitTemp);
celsius.addEventListener("click", celsiusTemp);
