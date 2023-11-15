# Rain Check
**_Have you had a Rain Check?_**

This is a weather app that show an hourly and daily forecast of the weather for wherever you choose.

This is a solo frontend project which utilises a weather API with React.js and Tailwind CSS and was coded by myself [@shedp](https://github.com/shedp)

**This project is deployed on [Netlify](https://unique-palmier-9835d9.netlify.app/)**

## Installation and Usage
- Clone this repo and navigate to root directory
- Run `npm install`
- Run `npm run start`
- It should run on `http://localhost:3000/`
### API Keys
You will need to make a `.env` file in the root directory containing 3 API keys:

    `REACT_APP_OPENWEATHER_KEY=your_key`

    `REACT_APP_WEATHERAPI_KEY=your_key`

    `REACT_APP_GOOGLE_API_KEY=your_key`

    `REACT_APP_UNSPLASH_KEY=your_key`

## Technologies
- React.js
- Tailwind.css
- Node.js
- Chart.js (react-chartjs-2)
- Luxon
- Axios
- OpenWeatherMap API
- Weather API
- Google Timezone API
- Unsplash API

## Wins & Challenges
### Wins
- Deconstructing API data to manage data that I keep
- Using state management to switch from celsius to fahrenheit
- Using Chart.js to display the hourly forecast
- Using Luxon to format the datetime

### Challenges
- Having to introduce a second weather API as the first did not have the information I needed
- Converting using UTC and timezones to get local time

## Future
- [ ] Switch to a single weather API
- [ ] Independent tooltip from Chart so that it doesn't refresh the chart when switching units
    (react-chartjs-2 does not offer this)
- [ ] Refactor code - code is messy as I was coding on the fly

###
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=appveyor)](https://opensource.org/licenses/MIT)
