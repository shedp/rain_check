import { UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'
import RenderIconOWM from './RenderIconOWM.jsx';

function Temperature({ weather: { temp, feels_like, temp_max, temp_min, humidity, localSunrise, localSunset, description, icon, speed }, unit }) {
    return (
        <div>
            <div className="flex items-center justify-center py-3 text-xl text-white bhy capitalize width-100">
                {description}
            </div>

            <div className="grid grid-cols-3 w-full py-3 text-white ">
                <div className="flex items-center"><RenderIconOWM icon={icon} /></div>
                <div><p className="text-center text-5xl flex-1 width-1/3">{unit === "imperial" ? `${temp}°F` : `${temp}°C`}</p></div>
            </div>
            <span></span>

            <div className="flex flex-row item-center justify-center space-x-2 text-white text-sm font-light">
                <UilTemperature />
                <p>Feels Like: <span className="font-medium">{`${unit === "imperial" ? `${feels_like}°F` : `${feels_like}°C`}`}</span></p>
                <p>|</p>
                <UilTear />
                <p>Humidity: <span className="font-medium">{`${humidity}%`}</span></p>
                <p>|</p>
                <UilWind />
                <p>Wind Speed: <span className="font-medium ml-1">{`${speed}`}</span></p>
                <p>|</p>
                <UilArrowUp />
                <p>High: <span className="font-medium">{unit === "imperial" ? `${temp_max}°F` : `${temp_max}°C`}</span></p>
                <p>|</p>
                <UilArrowDown />
                <p>Low: <span className="font-medium">{unit === "imperial" ? `${temp_min}°F` : `${temp_min}°C`}</span></p>
            </div>
            <div className="flex flex-row item-center justify-center space-x-2 text-white text-sm font-light">
                <UilSun />
                <p>Sunrise: <span className="font-medium">{`${localSunrise}`}</span></p>
                <p>|</p>
                <UilSunset />
                <p>Sunset: <span className="font-medium">{`${localSunset}`}</span></p>
            </div>
        </div>

    )
}
export default Temperature;