import axios from 'axios';
// import dotenv from 'dotenv';

export const getWeather = async () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_KEY
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}`
    try {
        const res = await axios.get(apiURL)
        const weatherData = await res.data
        console.log(weatherData)
        return weatherData
    } catch (err) {
        console.warn(err)
    }
}