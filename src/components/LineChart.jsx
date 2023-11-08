import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart as ChartJS } from 'chart.js/auto';
ChartJS.register(CategoryScale);

const LineChart = ({ forecast, unit }) => {
    // Sample data
    const data = {
        type: 'line',
        labels: forecast.hourlyForecast.map(item => item.time),
        datasets: [
            {
                label: `Temp ${unit === "imperial" ? 'F' : 'C'}`,
                data: unit === "imperial" ? forecast.hourlyForecast.map(item => item.temp_f) : forecast.hourlyForecast.map(item => item.temp_c),
                borderColor: 'white', // No border color
                borderWidth: 1.5, // Smooth line width
                backgroundColor: 'transparent',
                pointRadius: 0, // Data point size
                pointBackgroundColor: 'transparent', // Data point color
                tension: 0.4, // Adjust this for smoothness
            },
        ],
    };

    // Chart configuration
    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
                type: 'category',
                color: 'white',
            },
            y: {
                display: false,
            },
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (context) {
                        if (unit === "imperial") {
                            return `°F: ` + context.parsed.y
                        } else { return `°C: ` + context.parsed.y }
                    },
                },
            },
            legend: {
                display: false, // Hide legend
            },
            datalabels: {
                display: false, // Hide data labels
            },
        },
    };

    // Add gradient background
    const gradient = {
        x: 0, // Start position
        y: 0,
        x1: 0, // End position
        y1: 200,
        colorStops: [
            {
                offset: 0,
                color: 'rgba(0, 0, 255, 0.3)', // Start color
            },
            {
                offset: 1,
                color: 'rgba(0, 0, 255, 0)', // End color
            },
        ],
    };

    data.datasets[0].backgroundColor = gradient;

    return <Line data={data} options={options} style={{ height: '100px' }} />;
};

export default LineChart;