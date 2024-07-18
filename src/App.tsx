import React, { useState } from 'react';
import axios from 'axios'
import CityInput from './components/CityInput';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { WeatherData } from './types/weather';

const App: React.FC = () => {
  const [city, setCity] = useState('Paris');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city: string) => {
    setLoading(true);
    try {
      const response = await axios.get<WeatherData>(`http://127.0.0.1:8000/weather?city=${city}`);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching weather data. Please try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCitySubmit = (city: string) => {
    setCity(city);
    fetchWeather(city);
  };

  return (
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="border-stone-600 container mx-auto p-6 bg-white rounded-md shadow-md max-w-md">
          <h1 className="text-3xl text-center font-bold text-green-600 mb-6">
            Weather App
          </h1>
          <CityInput onCitySubmit={handleCitySubmit} />
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </div>
      </div>
  );
};

export default App;
