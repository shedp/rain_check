import React from 'react'
import { UilSun, UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSunset } from '@iconscout/react-unicons'

function Temperature() {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                Weather
            </div>

            <div className="flex items-center justify-between py-3 text-white ">
                <UilSun size={50} />
                <p className="text-5xl">XX°</p>

                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-small item-center justify-center">
                        <UilTemperature />
                        Real fell: <span className="font-medium ml-1">32</span>
                    </div>
                    <div className="flex font-light text-small item-center justify-center">
                        <UilTear />
                        Humidity: <span className="font-medium ml-1">32</span>
                    </div>
                    <div className="flex font-light text-small item-center justify-center">
                        <UilWind />
                        Wind Speed: <span className="font-medium ml-1">32</span>
                    </div>
                </div>
            </div>
            <span></span>
            <div className="flex flex-row item-center justify-center space-x-2 text-white text-sm font-light">
                <UilSun />
                <p>Sunrise: <span className="font-medium">32</span></p>
                <p>|</p>
                <UilSunset />
                <p>Sunset: <span className="font-medium">32</span></p>
                <p>|</p>
                <UilSun />
                <p>High: <span className="font-medium">32</span></p>
                <p>|</p>
                <UilSun />
                <p>Low: <span className="font-medium">32</span></p>
            </div>
        </div>

    )
}
export default Temperature;