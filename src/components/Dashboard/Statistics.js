import React, { useEffect, useState } from 'react';
import StatisticsOptions from './StatisticsOptions.js';
import Graph from './Graph.js';

const defaultPeriod = 7

export default function Statistics() {
    const [period, setPeriod] = useState(defaultPeriod);
    const [datas, setDatas] = useState(getDatas(defaultPeriod));
    const [labels, setLabels] = useState(getLabels(defaultPeriod));

    useEffect(() => {
        
    })

    useEffect(() => {
        setLabels(getLabels(period));
        setDatas(getDatas(period));
    }, [period])

    return <div style={style_ChartWrapper}>
        <StatisticsOptions setPeriod={setPeriod}/>
        <div style={style_GraphWrapper}>
            <Graph datas={datas} labels={labels}/>
        </div>
    </div>
}

const style_ChartWrapper = {
    margin: "24px",
    borderRadius: "5px 5px",
    boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#FFF",
    overflowX: "scroll",
    height: "calc(100vh - 64px - 48px)"
}

const style_GraphWrapper = {
    width: "auto",
    height: "calc(100vh - 64px - 48px - 71px)"
}

const month = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug", 
    "Sep", "Oct", "Nov", "Dec"
]

function getLabels(period) {
    var today = new Date();
    var result = [];

    while (period > 0) {
        let temp_date = today.getDate();
        let temp_month = month[today.getMonth()];
        
        result.push(temp_date + " " + temp_month);

        period--;
        today.setTime(today.getTime() - (1 * 24 * 60 * 60 * 1000));
    }
    
    return result.reverse();
}

function getRandomArbitrary() {
    var min = 0, max = 100;
    return parseInt(Math.random() * (max - min) + min);
}

function getDatas(period) {
    var Arr_Blank = new Array(period).fill(0);
    
    var Fn1 = Arr_Blank.map(() => getRandomArbitrary());
    var Fn2 = Arr_Blank.map(() => getRandomArbitrary());
    var Fn3 = Arr_Blank.map(() => getRandomArbitrary());

    var Price = Arr_Blank.map(() => getRandomArbitrary());

    return {
        Fn1: Fn1,
        Fn2: Fn2,
        Fn3: Fn3,
        Price: Price
    }
}