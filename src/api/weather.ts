import axios from 'axios';

export const fetchWeatherData = async (city: string) => {
    const response = await axios.get(`http://127.0.0.1:8000/weather?city=${city}`);
    return response.data;
};
