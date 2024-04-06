const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");

const API_KEY = "a07e04b484e939163e460aef2c19f501";

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
  input.value = "";
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const json = await response.json();
    console.log(json);
    const iconCode = await json.weather[0].icon;
    icon.innerHTML = `<img alt=icon" src="http://openweathermap.org/img/w/${iconCode}.png" />`;
    const weatherCity = json.name;
    const weatherCountry = json.sys.country;

    weather.innerHTML = `<p>${weatherCity}, ${weatherCountry} </p>`;
    const temp = json.main.temp;
    const Newtemp = temp - 273;
    const againTemp = Newtemp.toFixed(2);
    temprature.innerHTML = `<p>${againTemp}C</p>`;
    const desc = json.weather[0].description;
    description.innerHTML = `<p>${desc}</p>`;
  } catch (error) {
    console.log("Error");
  }
}
