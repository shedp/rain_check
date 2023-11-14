import axios from 'axios';
const { DateTime } = require('luxon');
// import dotenv from 'dotenv';

const findTimeZone = async (lat, lon, timestamp, format = "EEEE, dd LLL | hh:mm a") => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
    let apiURL = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat}%2C${lon}&timestamp=${timestamp}&key=${apiKey}`
    try {
        const res = await axios.get(apiURL)
        const data = res.data

        if (data.status === 'OK') {
            const rawOffset = data.rawOffset;
            const dstOffset = data.dstOffset;
            const localTimeStamp = timestamp + rawOffset + dstOffset;
            const formattedTime = DateTime.fromSeconds(localTimeStamp).toFormat(format)
            return formattedTime
        }
    } catch (err) {
        console.warn(err)
    }
}


// Fetch data from the OpenWeatehr MapAPI
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


const deconstructOpenWeatherMapData = async (data) => {
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

    const dateTime = await findTimeZone(lat, lon, dt)
    const localSunrise = await findTimeZone(lat, lon, sunrise, "hh:mm a")
    const localSunset = await findTimeZone(lat, lon, sunset, "hh:mm a")
    const { description, icon } = weather[0]
    return { lat, lon, temp, feels_like, temp_max, temp_min, humidity, city, dateTime, country, localSunrise, localSunset, description, icon, speed, timezone }
}

export const getDeconstructWeatherData = async (city_name, unit) => {
    const deconstructedData = await getOpenWeatherMapAPI(city_name, unit).then(deconstructOpenWeatherMapData)

    return deconstructedData
}

const getWeatherAPI = async (city_name) => {
    const apiKey = process.env.REACT_APP_WEATHERAPI_KEY
    let apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city_name}&aqi=no&alerts=no&days=7`
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
        const { time: datetime, temp_c, temp_f, condition } = h
        const time = DateTime.fromFormat(datetime.split(' ')[1], 'HH:mm').toFormat('h a');
        return { time, temp_c, temp_f, condition }
    })

    return { hourlyForecast }
}

export const getDeconstructHourlyForecastData = async (city_name) => {
    const deconstructedData = await getWeatherAPI(city_name).then(deconstructHourlyWeatherAPIData)

    return deconstructedData
}

const deconstructDailyWeatherAPIData = (data) => {
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
    const deconstructedData = await getWeatherAPI(city_name).then(deconstructDailyWeatherAPIData)
    return deconstructedData
}