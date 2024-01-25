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

	// Base URL for weather icons from openweathermap.org structure of 
	// https://openweathermap.org/img/wn/10d@2x.png:
	const iconBaseUrl = "http://openweathermap.org/img/wn/";

	// Otherwise ('cod' == 200), display the weather forecast.
	return (
		<div className="weather-data-card">
			<h2>Weather in {weatherData.name}</h2>
			<p>Temperature: {weatherData.main.temp}°</p>
			<p>Feels Like: {weatherData.main.feels_like}°</p>
			<p>Weather: {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>

			{/* Displaying the weather icon */}
			<img
				src={`${iconBaseUrl}${weatherData.weather[0].icon}@2x.png`}
				alt={weatherData.weather[0].description}
			/>
			<p>Humidity: {weatherData.main.humidity}%</p>
			<p>Pressure: {weatherData.main.pressure} hPa</p>
			<p>Wind Speed: {weatherData.wind.speed} m/s</p>
			<p>Cloudiness: {weatherData.clouds.all}%</p>
		</div>
	);
}

export default DisplayWeather;