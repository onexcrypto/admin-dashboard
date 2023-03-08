/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const labels = ['Janv', 'Fev', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Sept','Oct','Nov','Dec'];

const chart_data = {
    chart_1: [220,620,150,340,160,555,887,670,120,200,110,550],
    chart_2: [110,120,230,450,200,350,520,600,700,500],
    chart_3: [210,320,450,321,300,450,250,625,435,120],
};

export const data = {
    labels,
    datasets: [
        {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: [220,620,150,340,160,555,887,670,120,200,110,550],
        },
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [110,120,230,450,200,350,520,600,700,500,800,350],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar' as const,
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: [210,320,450,321,300,450,250,625,435,120,500,620],
        },
    ],
};

const IncomeChart = () => {
    return (
        <>
            <Chart type='bar' data={data} />;
        </>
    )
}

export default IncomeChart