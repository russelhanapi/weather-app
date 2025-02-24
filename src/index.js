import './style.css';

import { displayWeatherInfo, toggleLoader } from './modules/ui';
import { setUpEventListeners } from './modules/events';
import { getWeatherData } from './modules/api';

// Initial weather load (default city)
async function init() {
  toggleLoader(true);
  const weatherInfo = await getWeatherData('New York');
  displayWeatherInfo(weatherInfo);
}

setUpEventListeners();
init();
