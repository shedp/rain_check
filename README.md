## Rain Check
**_Have you had a Rain Check?_**

This is a weather app that show an hourly and daily forecast of the weather for wherever you choose.

This is a solo frontend project which utilises a weather API with React.js and Tailwind CSS and was coded by myself [@shedp](https://github.com/shedp)

## Installation and Usage
- Clone this repo and navigate to root directory
- Run `npm install`
- Run `npm run start`
- It should run on `http://localhost:3000/`
### API Keys
You will need to make a `.env` file in the root directory containing 3 API keys:
    `REACT_APP_OPENWEATHER_KEY=your_key`
    `REACT_APP_WEATHERAPI_KEY=your_key`
    `REACT_APP_BING_API_KEY=your_key`

## Technologies
- React.js
- Tailwind.css
- Node.js
- Chart.js
- Luxon
- Axios
- OpenWeatherMap API
- Weather API
- Bing Map API

## Wins & Challenges
### Wins
- Deconstructing API data to manage data that I keep
- Using state management to switch from celsius to fahrenheit
- Using Chart.js to display the hourly forecast
- Using Luxon to format the datetime

### Challenges
- Having to introduce a second weather aPI as the first did not have the information I needed
- Converting using UTC and timezones to get local time

## Future
- Switch to a single weather API