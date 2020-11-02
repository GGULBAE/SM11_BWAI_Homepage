import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Graph({data}) {
    return <Bar
        data={data}
        options={options}
        height={300}
    />
}

const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        xAxes: [
            {
                barThickness: 6,
                maxBarThickness: 10,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                ticks: {
                    fontColor: "#000",
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    min: 0
                },
                gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(0, 0, 0, 0.2)",
                    drawBorder: false,
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                }
            }
        ]
    },
    tooltips: {
        borderWidth: 1,
        enabled: true,
        intersect: false,
        mode: 'index',
    }
};