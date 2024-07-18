import React, { useState } from 'react';

interface CityInputProps {
    onCitySubmit: (city: string) => void;
}

const CityInput: React.FC<CityInputProps> = ({ onCitySubmit }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCitySubmit(city);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <label htmlFor="cityInput" className="block text-sm font-semibold mb-2">
                Enter Your City Name:
            </label>
            <input
                type="text"
                id="cityInput"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 p-3 border rounded-xl w-full focus:outline-none focus:ring focus:border-green-300"
                placeholder="Enter city"
            />
            <button
                type="submit"
                className="bg-green-600 text-white p-3 mt-4 rounded-md focus:ring focus:border-"
            >
                Get Weather
            </button>
        </form>
    );
};

export default CityInput;
