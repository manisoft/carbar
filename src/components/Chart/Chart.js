import React from 'react';
import classes from './Chart.module.css';
import ReactDOM from 'react-dom';
import AnyChart from 'anychart-react.min.js';

const Chart = (props) => {
    ReactDOM.render(
        <AnyChart
            type="pie"
            data={[1, 2, 3, 4]}
            title="Simple pie chart"
        />, document.getElementById('root'));
};

export default Chart;
