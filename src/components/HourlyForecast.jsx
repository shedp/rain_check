// import { UilSun, UilSunset } from '@iconscout/react-unicons'
import LineChart from './LineChart';
import styles from './HourlyForecast.module.css'

function HourlyForecast({ forecast, unit }) {
    return (
        <div>
            <div className="flex items-center justify-start my-6">
                <p className="text-white font-medium uppercase">Hourly Forecast</p>
            </div>
            <hr className="my-2" />
            <>
                <div className="py-5">
                    {forecast && <LineChart forecast={forecast} unit={unit} />}
                </div>
                <div className="flex flex-row items-center justify-between text-white" id={styles.responsiveFull}>
                    {forecast && forecast.hourlyForecast.map((hour, index) => (
                        <div className="flex flex-col items-center justify-center" key={index}>
                            <p className="font-light text-sm">{hour.time}</p>
                        </div>
                    ))}
                </div>
                <div className="flex-row items-center justify-between text-white" id={styles.responsive950}>
                    {forecast &&
                        forecast.hourlyForecast.map((hour, index) =>
                            index % 2 === 0 ? (
                                <div className="flex flex-col items-center justify-center" key={index}>
                                    <p className="font-light text-sm">{hour.time}</p>
                                </div>
                            ) : null
                        )}
                </div>
                <div className="flex-row items-center justify-between text-white" id={styles.responsive690}>
                    {forecast &&
                        forecast.hourlyForecast.map((hour, index) =>
                            index % 3 === 0 ? (
                                <div className="flex flex-col items-center justify-center" key={index}>
                                    <p className="font-light text-sm">{hour.time}</p>
                                </div>
                            ) : null
                        )}
                </div>
                
            </>

        </div>
    )
}

export default HourlyForecast
