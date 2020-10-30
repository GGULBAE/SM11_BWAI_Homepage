import React, { useEffect, useState } from 'react';
import StatisticsOptions from './StatisticsOptions.js';
import Graph from './Graph.js';
import Axios from 'axios';

const defaultSettings = 1
const apiServer = "http://api.bwai.io";
// 1: recent
// 2: monthly
// 3: yearly

export default function Statistics() {
    const [setting, setSetting] = useState(defaultSettings);
    const [datas, setDatas] = useState(getDatas(defaultSettings));
    const [labels, setLabels] = useState(getLabels(defaultSettings));
    
    // eslint-disable-next-line
    useEffect(() => {
        console.log(setDatas);
        console.log(setLabels);
    })

    useEffect(() => {
        if (setting === 1) {
            getRecentLabels();
            getRecentData();
        } else if (setting === 2) {
            getMonthlyLabels();
            getMonthlyData();
        } else if (setting === 3) {
            getYearlyLabels();
            getYearlyData();
        } else {
            throw new Error("SETTING INVALID");
        }
    }, [setting])

    return <div style={style_ChartWrapper}>
        <StatisticsOptions setSetting={setSetting}/>
        <div style={style_GraphWrapper}>
            <Graph datas={datas} labels={labels}/>
        </div>
    </div>

    function getRecentLabels() {
        const apiKey = window.sessionStorage.getItem("myAPIKey");
        
        var today = new Date();
        today.setTime(today.getTime() - (10 * 24 * 60 * 60 * 1000));
        
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        console.log(today);
        const url = `${apiServer}/api/bwai/v1/dashboard/year/${year}/month/${month}/day/${date}`;
        const config = {headers: { Authorization: `Bearer ${apiKey}` }};
        
        Axios.get(url, config)
        .then((res) => {
            console.log(res);
        });
        // console.log(result);
        // return result;
    }
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


function getRecentData() {}
function getMonthlyLabels() {}
function getMonthlyData() {}
function getYearlyLabels() {}
function getYearlyData() {}