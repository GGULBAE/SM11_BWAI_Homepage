import React from 'react';
import styled from 'styled-components';

import TodayUsages from './TodayUsages.js';
// import TodayBilling from './TodayBilling.js';
import APIUsages from './APIUsages.js';

// 당일 API 사용량 + 총 Billing 요금
export default function Statistics({ apiKey }) {
  return <StatisticsWrapper>
    <TodayUsagesWrapper>
      <TodayUsages/>
      <TodayUsages/>
      <TodayUsages/>
      <TodayUsages/>
    </TodayUsagesWrapper>
    <APIUsages apiKey={apiKey}></APIUsages>
  </StatisticsWrapper>
}

const StatisticsWrapper = styled.div``
const TodayUsagesWrapper = styled.div`
  margin: 24px 24px 0 24px;
  width: calc(100% - 48px);
  display: grid;
  grid-template-columns: repeat(4, calc(25%));
  height: calc(136px + 24px);

  div:last-child {
    margin-right: 0;
  }
`