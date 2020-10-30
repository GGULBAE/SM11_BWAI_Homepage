import React, { useState } from 'react';
import styled from 'styled-components';

import StatisticsOptions from './StatisticsOptions.js';
// import Chart from './Chart.js';

export default function Statistics({ apiKey }) {
  const [setting, setSetting] = useState(1);
  console.log(setting);
  return <StatisticsWrapper>
    <StatisticsOptions setSetting={setSetting}/>
    <ChartWrapper>
      <Chart/>
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