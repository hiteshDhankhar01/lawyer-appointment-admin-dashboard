"use client"; // Ensures the component is rendered on the client side in a Next.js app

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart5 = ({ chartData }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Ensure the chart adjusts to its container's size
        plugins: {
            title: {
                display: true,
                text: 'New Appointments by Month',
                color: '#fff',
                font: {
                    size: 16,
                },
            },
            legend: {
                labels: {
                    color: '#fff',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff', // Label color for X-axis
                },
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: '#fff', // Label color for Y-axis
                },
            },
        },
    };

    const labels = chartData.map(item => item.name);
    const data = {
        labels,
        datasets: [
            {
                label: 'New Appointments',
                data: chartData.map(item => item.appointments),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                yAxisID: 'y',
                pointBackgroundColor: 'rgba(255, 255, 255, 0.8)', // Color for the points
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    };

    return (
        <div className='bg-gray-800 rounded-md p-6 ah-72 w-full amd:w-3/4 alg:w-1/2 mx-auto'>
            <Line options={options} data={data} />
        </div>
    );
};

export default Chart5;
