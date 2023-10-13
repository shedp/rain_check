import { UilSun, UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSunset } from '@iconscout/react-unicons'

function Temperature({ weather: { temp, feels_like, temp_max, temp_min, humidity, sunrise, sunset, description, speed } }) {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                {description}
            </div>

            <div className="flex items-center justify-between py-3 text-white ">
                <UilSun size={50} />
                <p className="text-5xl">{`${temp}`}</p>

                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-small item-center justify-center">
                        <UilTemperature />
                        Feels like: <span className="font-medium ml-1">{`${feels_like}`}</span>
                    </div>
                    <div className="flex font-light text-small item-center justify-center">
                        <UilTear />
                        Humidity: <span className="font-medium ml-1">{`${humidity}`}</span>
                    </div>
                    <div className="flex font-light text-small item-center justify-center">
                        <UilWind />
                        Wind Speed: <span className="font-medium ml-1">{`${speed}`}</span>
                    </div>
                </div>
            </div>
            <span></span>
            <div className="flex flex-row item-center justify-center space-x-2 text-white text-sm font-light">
                <UilSun />
                <p>Sunrise: <span className="font-medium">{`${sunrise}`}</span></p>
                <p>|</p>
                <UilSunset />
                <p>Sunset: <span className="font-medium">{`${sunset}`}</span></p>
                <p>|</p>
                <UilArrowUp />
                <p>High: <span className="font-medium">{`${temp_max}`}</span></p>
                <p>|</p>
                <UilArrowDown />
                <p>Low: <span className="font-medium">{`${temp_min}`}</span></p>
            </div>
        </div>

    )
}
export default Temperature;