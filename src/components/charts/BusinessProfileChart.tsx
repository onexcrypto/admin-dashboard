import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Profil en attente', 'Profils activés', 'Profils Désactivés'],
    datasets: [
        {
            label: 'Profil Clients',
            data: [2, 18, 1],
            backgroundColor: [
                'rgb(219, 208, 109)',
                'rgb(165, 189, 186)',
                'rgb(224, 53, 99)',
                
            ],
            borderColor: [
                'rgb(219, 208, 109)',
                'rgb(165, 189, 186)',
                'rgb(224, 53, 99)',
            ],
            borderWidth: 1,
        },
    ],
};

const BusinessProfileChart = () => {
    return (
        <>
            <Pie data={data} />
        </>
    )
}

export default BusinessProfileChart