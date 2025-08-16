function getWeather() {
  const location = document.getElementById('locationInput').value || 'auto:ip';

  fetch(`https://wttr.in/${location}?format=j1`)
    .then(response => response.json())
    .then(data => {
      const current = data.current_condition[0];
      const area = data.nearest_area[0];

      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <p><strong>Location:</strong> ${area.areaName[0].value}, ${area.country[0].value}</p>
        <p><strong>Temperature:</strong> ${current.temp_C} °C</p>
        <p><strong>Condition:</strong> ${current.weatherDesc[0].value}</p>
        <p><strong>Humidity:</strong> ${current.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${current.windspeedKmph} km/h</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data.');
    });
}
