import React, { useState } from 'react';
import DisplayWeather from './DisplayWeather';
import WeatherForm from './WeatherForm';

function Weather() {
	const [zipCode, setZipCode] = useState('');
	const [unit, setUnit] = useState('imperial');
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);

	const fetchWeather = async () => {
		if (zipCode === '') {
			alert("Please enter a ZIP code.");
			return;
		}

		const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY
		const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=${unit}&appid=${apiKey}`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			setWeatherData(data);
		} catch (error) {
			setError(`Failed to fetch weather data: ${error.message}`);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetchWeather();
	};

	return (
		<div className="Weather-App">
			<h1>WeatherWise</h1>
			<WeatherForm
				zipCode={zipCode}
				setZipCode={setZipCode}
				unit={unit}
				setUnit={setUnit}
				handleSubmit={handleSubmit}
			/>

			{/* Conditional Rendering */}
			{error ? (
				<p className="error">Error fetching weather: {error}</p>
			) : (
				<DisplayWeather weatherData={weatherData} />
			)}


		</div>
	)
}

export default Weather;