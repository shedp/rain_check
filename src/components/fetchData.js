import axios from 'axios';
// import dotenv from 'dotenv';

const getOpenWeatherMapAPI = async (city_name, unit) => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_KEY
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=${unit}`
    try {
        const res = await axios.get(apiURL)
        const data = await res.data
        return data
    } catch (err) {
        console.warn(err)
    }
}

const deconstructOpenWeatherMapData = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name: city,
        dt,
        sys: { country, sunrise, sunset },
        timezone,
        weather,
        wind: { speed }
    } = data
    const { description, icon } = weather[0]
    return { lat, lon, temp, feels_like, temp_max, temp_min, humidity, city, dt, country, sunrise, sunset, description, icon, speed, timezone }
}

export const getDeconstructWeatherData = async (city_name, unit) => {
    const deconstructedData = await getOpenWeatherMapAPI(city_name, unit).then(deconstructOpenWeatherMapData)

    return deconstructedData
}

const getWeatherAPI = async (city_name) => {
    const apiKey = process.env.REACT_APP_WEATHERAPI_KEY
    let apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city_name}&days=5&aqi=no&alerts=no`
    try {
        const res = await axios.get(apiURL)
        const data = await res.data
        return data
    } catch (err) {
        console.warn(err)
    }
}

const deconstructHourlyWeatherAPIData = (data) => {
    const {
        forecast: { forecastday }
    } = data
    const { hour
    } = forecastday[0]

    const hourlyForecast = hour.map(h => {
        const { time, temp_c, temp_f, condition } = h
        return { time, temp_c, temp_f, condition }
    })

    return { hourlyForecast }
}

export const getDeconstructHourlyForecastData = async (city_name) => {
    const deconstructedData = await getWeatherAPI(city_name).then(deconstructHourlyWeatherAPIData)

    return deconstructedData
}

const deconstrucDailytWeatherAPIData = (data) => {
    const {
        forecast: { forecastday }
    } = data

    const dailyForecast = forecastday.map(d => {
        const { date, day } = d
        const { avgtemp_c, avgtemp_f, condition } = day
        return { date, avgtemp_c, avgtemp_f, condition }
    })

    return { dailyForecast }
}

export const getDeconstructDailyForecastData = async (city_name) => {
    const deconstructedData = await getWeatherAPI(city_name).then(deconstrucDailytWeatherAPIData)

    return deconstructedData
}
