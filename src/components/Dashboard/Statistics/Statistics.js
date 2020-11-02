import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import StatisticsOptions from './StatisticsOptions.js';

import getChartData from './getChartData.js';

export default function Statistics({ apiKey }) {
  const [setting, setSetting] = useState(1);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if (data) return;
    
    getChartData(apiKey, setting, setData);
  }, [apiKey, setting, data])

  return <StatisticsWrapper>
    <StatisticsOptions setSetting={setSetting}/>
    <ChartWrapper>
      <Chart data={data}/>
    </ChartWrapper>
  </StatisticsWrapper>
}

const StatisticsWrapper = styled.div`
  margin: 24px;
  border-radius: 5px 5px;
  boxShadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #FFF;
  overflow-x: scroll;
  height: calc(100vh - 64px - 48px);
`

const ChartWrapper = styled.div``;
const Chart = styled.div``;
