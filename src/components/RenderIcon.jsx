import { UilSun, UilMoon, UilCloudSun, UilCloudMoon, UilCloud, UilClouds, UilCloudSunRain, UilCloudMoonRain, UilCloudShowersHeavy, UilThunderstorm, UilSnowflake, UilCloudWind } from '@iconscout/react-unicons'

function RenderIcon({ icon }) {
    let weatherIcon;
    console.log(icon)
    switch (icon) {
        case ("01n"):
            weatherIcon = <UilMoon size={50} className="flex-1" />
            break;

        case ("02d"):
            weatherIcon = <UilCloudSun size={50} className="flex-1" />
            break;

        case ("02n"):
            weatherIcon = <UilCloudMoon size={50} className="flex-1" />
            break;

        case ("03d"):
        case ("03n"):
            weatherIcon = <UilCloud size={50} className="flex-1" />
            break;

        case ("04d"):
        case ("04n"):
            weatherIcon = <UilClouds size={50} className="flex-1" />
            break;


        case ("09d"):
            weatherIcon = <UilCloudSunRain size={50} className="flex-1" />
            break;

        case ("09n"):
            weatherIcon = <UilCloudMoonRain size={50} className="flex-1" />
            break;

        case ("10d"):
        case ("10n"):
            weatherIcon = <UilCloudShowersHeavy size={50} className="flex-1" />
            break;

        case ("11d"):
        case ("11n"):
            weatherIcon = <UilThunderstorm size={50} className="flex-1" />
            break;

        case ("13d"):
        case ("13n"):
            weatherIcon = <UilSnowflake size={50} className="flex-1" />
            break;

        case ("50d"):
        case ("50n"):
            weatherIcon = <UilCloudWind size={50} className="flex-1" />
            break;

        default:
            weatherIcon = <UilSun size={50} className="flex-1" />

    }

    return weatherIcon
}

export default RenderIcon;