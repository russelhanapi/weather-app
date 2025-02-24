import { DOM, displayWeatherInfo, toggleLoader } from './ui';
import { getWeatherData } from './api';

export const setUpEventListeners = function () {
  // User enters a city and presses enter
  DOM.inputCityEl.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
      const city = e.target.value.trim();
      if (!city) return;

      toggleLoader(true);
      const weatherInfo = await getWeatherData(city);
      displayWeatherInfo(weatherInfo);
      // Hide the loader UI once the weather icon finished loading
      DOM.iconEl.addEventListener('load', () => toggleLoader(false));
    }
  });
};
