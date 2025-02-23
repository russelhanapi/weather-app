import './style.css';

const apiKey = 'FPWXBUZ5TN987PWUXE6MECV7S';

const inputCityEl = document.querySelector('.input-city');
const containerWeatherInfoEl = document.querySelector('.weather-info');
const loaderEl = document.querySelector('.loader');
const temperatureEl = document.querySelector('.weather-temperature-value');
const feelsLikeEl = document.querySelector('.weather-feels-like-value');
const conditionEl = document.querySelector('.weather-condition');
const iconEl = document.querySelector('.weather-icon');

async function getWeatherData(city) {
  try {
    toggleLoader(true);
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    return {
      temperature: data.currentConditions.temp,
      feelsLike: data.currentConditions.feelslike,
      condition: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
    };
  } catch (error) {
    console.error(error);
    toggleLoader(false);
  }
}

inputCityEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const city = e.target.value.trim();
    if (city) getWeatherData(city).then(renderWeatherInfo);
  }
});

function renderWeatherInfo(weatherInfo) {
  if (!weatherInfo) return;
  const temperature = Math.round(weatherInfo.temperature);
  const feelsLike = weatherInfo.feelsLike;
  const condition = weatherInfo.condition;
  const iconSrc = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/3rd%20Set%20-%20Color/${weatherInfo.icon}.svg`;

  temperatureEl.textContent = temperature;
  feelsLikeEl.textContent = feelsLike;
  conditionEl.textContent = condition;
  iconEl.setAttribute('src', iconSrc);

  iconEl.addEventListener('load', () => {
    toggleLoader(false);
  });
}

getWeatherData('New York').then(renderWeatherInfo);

function toggleLoader(show) {
  loaderEl.classList.toggle('hidden', !show); // Show loader if show === true
  containerWeatherInfoEl.classList.toggle('hidden', show); // Hide card if show === true
}
