import './App.css';
import Inputs from './components/Inputs';
import TimeLoc from './components/TimeLoc';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import { getDeconstructData, getDeconstructForecastData } from './components/fetchData'
// import { useState, useEffect } from 'react';


function App() {
  // const [weatherData, setWeatherData] = useState('')

  let city_name = 'london'
  let unit = 'metric'

  const getWeatherData = async () => {
    const data = await getDeconstructData(city_name, unit)
    console.log(data)
    return data
  }

  const getForecastData = async () => {
    const data = await getDeconstructForecastData(city_name)
    console.log(data)
    return data
  }

  getWeatherData()
  getForecastData()

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Inputs />
      <TimeLoc />
      <Temperature weather="overcast" />
      <Forecast title="hourly forecast" time="time" />
      <Forecast title="daily forecast" time="day" />
    </div>
  );
}

export default App;