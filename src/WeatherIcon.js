import React from 'react';

function WeatherIcon({ iconCode, description }) {
    const iconBaseUrl = "http://openweathermap.org/img/wn/";
    return (
        <img 
            src={`${iconBaseUrl}${iconCode}@2x.png`} 
            alt={description} 
        />
    );
}

export default WeatherIcon;
