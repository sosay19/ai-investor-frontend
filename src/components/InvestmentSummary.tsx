import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Bonds', 'Stocks', 'ETFs'],
    datasets: [
        {
            data: [30, 50, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
    ]
};

const InvestmentSummary: React.FC = () => {
    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Investment Summary</h2>
            <Pie data={data} />
        </div>
    );
};

export default InvestmentSummary;
