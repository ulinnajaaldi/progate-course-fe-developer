const form = document.querySelector("form");
const cityName = document.querySelector("#city-name");
const cityDescription = document.querySelector("#city-description");
const currentWeatherDiv = document.getElementById("current-weather");
const forecastDiv = document.getElementById("weather-forecast");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6537379c5amshd45502f70d2b720p184d7fjsn14ded6749b15",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const showCityDescription = (data) => {
  const cityName = data.location.name;
  const countryName = data.location.country;
  const element = `<h2>Showing the weather of ${cityName}, ${countryName}<h2>`;
  cityDescription.innerHTML = element;
};

const showCurrentWeather = (data) => {
  const currentWeather = {
    condition: data.current.condition.text,
    conditionImage: data.current.condition.icon,
    temperature: data.current.temp_c,
    humidity: data.current.humidity,
    time: data.current.last_updated,
  };

  const element = `
        <div class="weather-container">
          <h2>Current Weather</h2>
          <p style="text">"${currentWeather.condition}"</p>
          <img src="https:${currentWeather.conditionImage}" class="weather-image">
          <p>temperature: ${currentWeather.temperature}℃</p>
          <p>humidity: ${currentWeather.humidity}%</p>
          <p>(updated at ${currentWeather.time})</p>
        </div>
      `;
  currentWeatherDiv.innerHTML = element;
};

const showWeatherForecast = (data) => {
  forecasts = data.forecast.forecastday;

  let listOfElement = "";

  for (let i = 0; i < forecasts.length; i++) {
    const forecastData = {
      date: forecasts[i].date,
      condition: forecasts[i].day.condition.text,
      conditionImage: forecasts[i].day.condition.icon,
      avg_temp: forecasts[i].day.avgtemp_c,
      max_temp: forecasts[i].day.maxtemp_c,
      min_temp: forecasts[i].day.mintemp_c,
      avg_humidity: forecasts[i].day.avghumidity,
    };

    const element = `
        <div class="weather-container">
          <h2>Weather of ${forecastData.date}</h2>
          <p style="text">"${forecastData.condition}"</p>
          <img src="https:${forecastData.conditionImage}" class="weather-image">
          <p>Average Temperture: ${forecastData.avg_temp}℃</p>
          <p>(Maximum: ${forecastData.max_temp}℃, Minimum: ${forecastData.min_temp}℃)</p>
          <p>Average Humidity: ${forecastData.avg_humidity}%</p>
        </div>
      `;
    listOfElement += element;
  }

  forecastDiv.innerHTML = listOfElement;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    if (!cityName.value) {
      return;
    }
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName.value}&days=`,
      options
    );
    const result = await response.json();
    console.log(result);
    if (!result.error) {
      showCityDescription(result);
      showCurrentWeather(result);
      showWeatherForecast(result);
    }
  } catch (error) {
    console.log(error);
  }
});
