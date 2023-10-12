import { UilSun, UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSunset } from '@iconscout/react-unicons'

function Forecast({ title }) {
    return (
        <div>
            <div className="flex items-center justify-start my-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            <div className="flex flex-row items-center justify-between text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">Time</p>
                    <UilSun />
                    <p className="font-medium">deg</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">Time</p>
                    <UilSun />
                    <p className="font-medium">deg</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">Time</p>
                    <UilSun />
                    <p className="font-medium">deg</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">Time</p>
                    <UilSun />
                    <p className="font-medium">deg</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">Time</p>
                    <UilSun />
                    <p className="font-medium">deg</p>
                </div>
            </div>

        </div>
    )
}

export default Forecast