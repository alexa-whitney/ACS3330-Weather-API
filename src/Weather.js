import React from 'react';
import { useState } from 'react';

function Weather() {
	const [zipCode, setZipCode] = useState('');
	const [unit, setUnit] = useState('imperial');

	return (
		<div className="Weather-App">
			<h1>Weather</h1>
			<form>
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

				<button>Submit</button>
			</form>
		</div>
	)
}

export default Weather;