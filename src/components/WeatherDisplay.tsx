import React from 'react';
import { WeatherData } from '../types/weather';

interface WeatherDisplayProps {
    weatherData: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
                Location: {weatherData.location.name}, {weatherData.location.country}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p className="text-lg">Temperature: {weatherData.current.temp_c}°C</p>
                    <p className="text-lg">Weather: {weatherData.current.condition.text}</p>
                </div>
                <div>
                    <p className="text-lg">Humidity: {weatherData.current.humidity}%</p>
                    <p className="text-lg">Wind Speed: {weatherData.current.wind_kph} kph</p>
                    <p className="text-lg">Visibility: {weatherData.current.vis_km} km</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;
