import './App.css';

import Inputs from './components/Inputs';
import TimeLoc from './components/TimeLoc';
import Temperature from './components/Temperature';
import { getDeconstructWeatherData, getDeconstructHourlyForecastData, getDeconstructDailyForecastData } from './components/fetchData'
import { useState, useEffect } from 'react';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import Background from './components/Background';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [city_name, setCity_Name] = useState('london')
  const [unit, setUnit] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [hourlyForecast, setHourlyForecast] = useState(null)
  const [dailyForecast, setDailyForecast] = useState(null)

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);


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
      } catch (err) {
        console.error('Error', err)
      }
    }
    getHourlyForecast()
  }, [city_name])

  useEffect(() => {
    const getDailyForecast = async () => {
      try {
        const data = await getDeconstructDailyForecastData(city_name);
        setDailyForecast(data)
      } catch (err) {
        console.error('Error', err)
      }
    }
    getDailyForecast()
  }, [city_name])


  return (
    <div className={`content ${showContent ? 'visible' : ''} py-5 sm:px-5 md:px-14 px-24 from-cyan-700 to-blue-700 h-full`}>
      {weather && (
        <>

          <Inputs setCity_Name={setCity_Name} unit={unit} setUnit={setUnit} />
          <TimeLoc weather={weather} />
          <Temperature weather={weather} unit={unit} />
          <HourlyForecast forecast={hourlyForecast} unit={unit} />
          <DailyForecast forecast={dailyForecast} unit={unit} />
          <Background city={city_name} />
        </>
      )}

    </div>
  );
}

export default App;
