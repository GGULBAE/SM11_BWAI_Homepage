import React from 'react';
import Select from 'react-select'

export default function StatisticsOptions({setSetting}) {
    const options = [
        { value: 1, label: 'Recent' },
        { value: 2, label: 'Monthly' },
        { value: 3, label: 'Yearly' },
        // { value: 30, label: 'past 1 month' },
        // { value: 90, label: 'past 3 months' }
    ]

    function onChange(e) {
        setSetting(e.value)
    }

    return <div style={style_StatisticsOptions}>
        <p style={style_StatisticsOptions_Text}>API 사용량</p>
        <div style={style_StatisticsOptions_Select}>
            <Select 
                options={options} 
                defaultValue={options[0]}
                onChange={onChange}/>
        </div>
    </div>
}

const style_StatisticsOptions = {
    padding: "16px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
}

const width_Select = "156";

const style_StatisticsOptions_Text = {
    margin: 0,
    display: "inline-block",
    fontWeight: "bold",
    width: `calc(100% - ${width_Select}px)`
}

const style_StatisticsOptions_Select = {
    width: `${width_Select}px`,
    display: "inline-block"
}