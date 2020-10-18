import React from 'react';
import { Bar } from 'react-chartjs-2';

/*
    colors:
    #30A9DE
    #EFDC05
    #E53A40
    #090707
*/

export default function Graph({datas, labels}) {
    console.group("Graph");
    console.log(datas);
    console.log(labels);
    console.groupEnd();

    const data = {
        datasets: [
            {
                backgroundColor: "#30A9DE",
                data: datas.Fn1,
                label: 'Fn1 Call'
            },
            {
                backgroundColor: "#EFDC05",
                data: datas.Fn2,
                label: 'Fn2 Call'
            },
            {
                backgroundColor: "#E53A40",
                data: datas.Fn3,
                label: 'Fn3 Call'
            },
            {
                backgroundColor: "#090707",
                data: datas.Price,
                label: 'PRICE(원)'
            }
        ],
        labels: labels
    };

    return <Bar
        data={data}
        options={options}
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
                barThickness: 12,
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