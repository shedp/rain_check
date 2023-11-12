import { UilSun, UilCloudHail, UilCloudSun, UilCloud, UilClouds, UilCloudSunRain, UilCloudShowersHeavy, UilThunderstorm, UilSnowflake, UilCloudWind } from '@iconscout/react-unicons'

function RenderIconWAPI({ icon }) {
    let weatherIcon;
    // let iconWAPI = props.icon
    // let iconWAPI = "//cdn.weatherapi.com/weather/64x64/day/116.png"


    function extractCode(string) {
        const match = string.match(/(\d+).png/)
        return match[1]
    }

    let iconCode = extractCode(icon)

    switch (iconCode) {
        // Part cloud
        case ("116"):
            weatherIcon = <UilCloudSun size={50} className="flex-1" />
            break;
        // clouds
        case ("119"):
            weatherIcon = <UilCloud size={50} className="flex-1" />
            break;
        // cloudy
        case ("112"):
            weatherIcon = <UilClouds size={50} className="flex-1" />
            break;

        // light rain, patchy rain
        case ("353"):
        case ("305"):
        case ("299"):
        case ("296"):
        case ("293"):
        case ("263"):
        case ("176"):
        case ("281"):
        case ("311"):
            weatherIcon = <UilCloudSunRain size={50} className="flex-1" />
            break;
        // rain, heavy rain
        case ("356"):
        case ("359"):
        case ("314"):
        case ("302"):
        case ("185"):
        case ("284"):
        case ("308"):
            weatherIcon = <UilCloudShowersHeavy size={50} className="flex-1" />
            break;
        // all cases of thunder
        case ("395"):
        case ("392"):
        case ("389"):
        case ("386"):
        case ("200"):
            weatherIcon = <UilThunderstorm size={50} className="flex-1" />
            break;

        // all cases of snow
        case ("179"):
        case ("227"):
        case ("230"):
        case ("323"):
        case ("332"):
        case ("335"):
        case ("338"):
        case ("326"):
        case ("329"):
        case ("374"):
        case ("368"):
            weatherIcon = <UilSnowflake size={50} className="flex-1" />
            break;

        // sleet
        case ("365"):
        case ("350"):
        case ("271"):
        case ("362"):
        case ("317"):
        case ("182"):
        case ("320"):
        case ("377"):
            weatherIcon = < UilCloudHail size={50} className="flex-1" />
            break;
        // mist or fog
        case ("248"):
        case ("260"):
        case ("143"):
            weatherIcon = <UilCloudWind size={50} className="flex-1" />
            break;

        default:
            weatherIcon = <UilSun size={50} className="flex-1" />

    }

    return weatherIcon
}

export default RenderIconWAPI;