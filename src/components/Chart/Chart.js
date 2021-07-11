import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {

    const data = {
        labels: props.labels,
        datasets: [{
            label: props.label,
            backgroundColor: props.barColor,
            borderColor: '',
            data: props.data
        }]
    };

    return (
        <Bar data={data} />
    );
};

export default BarChart;

