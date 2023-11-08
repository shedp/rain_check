import { UilSun, UilSunset } from '@iconscout/react-unicons'
import LineChart from './LineChart';

function HourlyForecast({ forecast, unit }) {
    return (
        <div>
            <div className="flex items-center justify-start my-6">
                <p className="text-white font-medium uppercase">Hourly Forecast</p>
            </div>
            <hr className="my-2" />
            <>
                <div>
                    {forecast && <LineChart forecast={forecast} unit={unit} />}
                </div>
                <div className="flex flex-row items-center justify-between text-white">
                    {forecast && forecast.hourlyForecast.map((hour, index) => (
                        <div className="flex flex-col items-center justify-center" key={index}>
                            <p className="font-light text-sm">{hour.time}</p>
                            {/* {unit === "imperial" ? (
                                <p className="font-medium">{hour.temp_f}</p>
                            ) : (
                                <p className="font-medium">{hour.temp_c}</p>
                            )} */}
                        </div>
                    ))}
                </div>
            </>

        </div>
    )
}

export default HourlyForecast