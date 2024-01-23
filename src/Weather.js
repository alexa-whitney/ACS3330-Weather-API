import React from 'react';
import { useState } from 'react';

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
			<h1>Weather</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					pattern="\d{5}"
					placeholder="Enter Zip Code"
					value={zipCode}
					onChangeCapture={(e) => setZipCode(e.target.value)}
					title="Enter a 5-digit ZIP code"
				/>

				<select value={unit} onChange={(e) => setUnit(e.target.value)}>
					<option value="imperial">Fahrenheit</option>
					<option value="metric">Celsius</option>
				</select>

				<div>
					<input
						type="radio"
						id="imperial"
						name="unit"
						value="imperial"
						checked={unit === 'imperial'}
						onChange={(e) => setUnit(e.target.value)}
					/>
					<label htmlFor="imperial">Fahrenheit</label>
				</div>

				<div>
					<input
						type="radio"
						id="metric"
						name="unit"
						value="metric"
						checked={unit === 'metric'}
						onChange={(e) => setUnit(e.target.value)}
					/>
					<label htmlFor="celsius">Celsius</label>
				</div>

				<button type="submit">Get Weather</button>
			</form>

			{weatherData && (
				<div>
					<h2>Weather Data</h2>
					<p>{JSON.stringify(weatherData)}</p>
				</div>
			)}

			{error && <p>Error: {error}</p>}
		</div>
	)
}

export default Weather;