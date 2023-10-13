import './App.css';
import Inputs from './components/Inputs';
import TimeLoc from './components/TimeLoc';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import { getDeconstructWeatherData, getDeconstructHourlyForecastData, getDeconstructDailyForecastData } from './components/fetchData'
import { useState, useEffect } from 'react';


function App() {
  const [city_name, setCity_Name] = useState('london')
  const [unit, setUnit] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [hourlyForecast, setHourlyForecast] = useState(null)

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await getDeconstructWeatherData(city_name, unit);
        setWeather(data)
      } catch (err) {
        console.error('Error', err)
      }
    }
    getWeatherData()
  }, [city_name, unit])

  useEffect(() => {
    const getHourlyForecast = async () => {
      try {
        const data = await getDeconstructHourlyForecastData(city_name);
        setHourlyForecast(data)
        console.log(data)
      } catch (err) {
        console.error('Error', err)
      }
    }
    getHourlyForecast()
  }, [city_name])





  // getForecastData()

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      {weather && (
        <>
          <Inputs />
          <TimeLoc weather={weather} />
          <Temperature weather={weather} />
          <Forecast title="hourly forecast" forecast={hourlyForecast} />
          <Forecast title="daily forecast" time="day" />
        </>
      )}

    </div>
  );
}

export default App;