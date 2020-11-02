import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StatisticsOptions from './StatisticsOptions.js';
import Chart from './Chart.js';

import getChartData from './getChartData.js';
import convertChartData from './convertChartData.js';

export default function Statistics({ apiKey }) {
  const [setting, setSetting] = useState(1); // Default: This Month
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data)
      convertChartData(data, setting, setChartData);
    // eslint-disable-next-line
  }, [data])

  useEffect(() => {
    getChartData(apiKey, setting, setData);
  }, [apiKey, setting]);

  return <StatisticsWrapper>
    <StatisticsOptions setSetting={setSetting} />
    <ChartWrapper>
      <Chart data={chartData} />
    </ChartWrapper>
  </StatisticsWrapper>
}

const StatisticsWrapper = styled.div`
  margin: 24px;
  border-radius: 5px 5px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #FFF;
  overflow-x: scroll;
  height: calc(300px + 71px + 24px + 24px);
  
`

const ChartWrapper = styled.div`
  margin: 24px;
`;