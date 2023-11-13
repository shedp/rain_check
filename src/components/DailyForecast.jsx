import RenderIconWAPI from './RenderIconWAPI.jsx'
const { DateTime } = require('luxon');

function DailyForecast({ forecast, unit }) {

    function formatDate(inputDate) {
        const today = DateTime.now().startOf('day');
        const input = DateTime.fromISO(inputDate);

        if (input.hasSame(today, 'day')) {
            return 'Today';
        } else if (input.hasSame(today.plus({ days: 1 }), 'day')) {
            return 'Tomorrow';
        } else {
            return input.toFormat('EEE');
        }
    }


    return (
        <div>
            <div className="flex items-center justify-start my-6">
                <p className="text-white font-medium uppercase">Daily Forecast</p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                {forecast && forecast.dailyForecast.map((date, index) => (
                    <div className="flex flex-col items-center justify-center" key={index} >
                        <p className="font-light text-sm">{formatDate(date.date)}</p>
                        <RenderIconWAPI icon={date.condition.icon} />
                        {unit === "imperial" ? (
                            <p className="font-medium">{date.avgtemp_f}°F</p>
                        ) : (
                            <p className="font-medium">{date.avgtemp_c}°C</p>
                        )}
                    </div>
                ))}
            </div>

        </div >
    )
}

export default DailyForecast