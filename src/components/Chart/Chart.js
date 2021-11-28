import React from 'react';
import ChartBar from 'ChartBar.css';

const Chart = props => {
    return <div className="chart">
        {props.dataPounts.map((dataPoint) => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={null}
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart;
