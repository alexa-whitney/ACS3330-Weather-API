import React from 'react';

function DisplayWeather({ weatherData }) {
	// If weatherData is null, display custom message.
	if (!weatherData) {
		return <p>No weather data available. Please submit a ZIP code to get weather information.</p>;
	}
	// Checks the 'cod' property of 'weatherData' that is returned from the API. If it is not 200, 
	// display an error message.
	if (weatherData.cod !== 200) {
		return <p>Error: {weatherData.message}</p>
	}

	// Otherwise ('cod' == 200), display the weather forecast.
	return (
		<div>
			<h2>Weather in {weatherData.name}</h2>
			<p>Temperature: {weatherData.main.temp}°</p>
			<p>Feels Like: {weatherData.main.feels_like}°</p>
      <p>Weather: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Pressure: {weatherData.main.pressure} hPa</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Cloudiness: {weatherData.clouds.all}%</p>
		</div>
	);
}

export default DisplayWeather;