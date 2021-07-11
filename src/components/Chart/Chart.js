import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {

    const { labels, label, barColor, dataSet } = props;

    const data = {
        labels: labels,
        datasets: [{
            label: label,
            backgroundColor: barColor,
            borderColor: 'white',
            data: dataSet
        }]
    };

    return (
        <Bar data={data} />
    );
};

export default BarChart;

