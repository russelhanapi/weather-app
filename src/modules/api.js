const apiKey = 'FPWXBUZ5TN987PWUXE6MECV7S';

export async function getWeatherData(city) {
  try {
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
  }
}
