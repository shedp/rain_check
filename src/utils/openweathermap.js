
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const getWeatherData = async (city_name) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}}&appid=${API_KEY}`

    try {
        const response = await fetch(url)
    } catch (error) {
        console.warn(error)
    }
    console.log(url)
}

export default getWeatherData