export const DOM = {
  inputCityEl: document.querySelector('.input-city'),
  containerWeatherInfoEl: document.querySelector('.weather-info'),
  loaderEl: document.querySelector('.loader'),
  temperatureEl: document.querySelector('.weather-temperature-value'),
  feelsLikeEl: document.querySelector('.weather-feels-like-value'),
  conditionEl: document.querySelector('.weather-condition'),
  iconEl: document.querySelector('.weather-icon'),
};

export const displayWeatherInfo = function (weatherInfo) {
  if (!weatherInfo) return;
  const temperature = Math.round(weatherInfo.temperature);
  const feelsLike = weatherInfo.feelsLike;
  const condition = weatherInfo.condition;
  const iconSrc = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/3rd%20Set%20-%20Color/${weatherInfo.icon}.svg`;

  DOM.temperatureEl.textContent = temperature;
  DOM.feelsLikeEl.textContent = feelsLike;
  DOM.conditionEl.textContent = condition;
  DOM.iconEl.setAttribute('src', iconSrc);
};

export const toggleLoader = function (show) {
  DOM.loaderEl.classList.toggle('hidden', !show); // Show loader if show === true
  DOM.containerWeatherInfoEl.classList.toggle('hidden', show); // Hide card if show === true
};
