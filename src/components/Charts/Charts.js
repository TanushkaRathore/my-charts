import './Charts.css';

import ReactEChart from 'echarts-for-react';
import Draggable from 'react-draggable';
const Charts = () => {

    const eChartsOption = {
            xAxis: {
                type: "category"
            },
            yAxis: {
                type: "value"
            },
            series:[
             {
            data: [1000, 2000, 3000, 4000, 5000],
            type: "bar",
            stack: "total"
            },
            {
            data: [390, 550, 790, 450, 840],
            type: "bar",
            stack: "total"
        }]
    }
    return (
        <Draggable>
        <div className="container resize ">
        <div className='chart'>
            <ReactEChart style={{ width:"50vw", height:"50vh"}} option={eChartsOption} />
        </div>
        </div>
         </Draggable> 
    );
}

export default Charts;

