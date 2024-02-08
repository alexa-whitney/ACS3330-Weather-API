import React from 'react';

function WeatherForm({ zipCode, setZipCode, unit, setUnit, handleSubmit, handleGeolocation }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                pattern="\d{5}"
                placeholder="Enter Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
                <label htmlFor="metric">Celsius</label>
            </div>

            <button type="submit">Get Weather</button>
            <button type="button" onClick={handleGeolocation}>Use My Location</button>
        </form>
    );
}

export default WeatherForm;
