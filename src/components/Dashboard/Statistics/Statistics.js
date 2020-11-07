import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import TodayUsages from './TodayUsages.js';
// import TodayBilling from './TodayBilling.js';
import APIUsages from './APIUsages.js';
import Axios from 'axios';
import getConfig from '../getConfig.js';

// 당일 API 사용량 + 총 Billing 요금
export default function Statistics({ apiKey }) {
  const defaultUsages = {
    Judge: {
      prev: 0,
      today: 0
    },
    Masking: {
      prev: 0,
      today: 0
    },
    Probability: {
      prev: 0,
      today: 0
    },
    Price: {
      prev: 0,
      today: 0
    }
  }
  const [usages, setUsages] = useState(defaultUsages);

  useEffect(() => {
    async function getPrevTodayData(apiKey) {
      var Prev = await getPrevData(apiKey);
      var Today = await getTodayData(apiKey);

      console.group("USEFFECT");
      console.log(Prev);
      console.log(Today);
      console.groupEnd();
      console.log(setUsages);
    }

    getPrevTodayData(apiKey);
  }, [apiKey])
  return <StatisticsWrapper>
    <TodayUsagesWrapper>
      <TodayUsages type="Judge" prev={usages.Judge.prev} current={usages.Judge.today}/>
      <TodayUsages type="Masking" prev={usages.Masking.prev} current={usages.Masking.today}/>
      <TodayUsages type="Probability" prev={usages.Probability.prev} current={usages.Probability.today}/>
      <TodayUsages type="Price" prev={usages.Price.prev} current={usages.Price.today}/>
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

const getNowDate = () => {
  const now = new Date();

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate()
  }
}

const getYesterDayDate = () => {
  const now = new Date();
  now.setDate(now.getDate() - 1);

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate()
  }
}

const apiServer = process.env.REACT_APP_API_SERVER;

const getPrevData = (apiKey) => {
  const date = getYesterDayDate();
  const url = `${apiServer}/api/bwai/v1/dashboard/year/${date.year}/month/${date.month}/day/${date.date}`;
  const config = getConfig(apiKey);

  return Axios.get(url, config)
}

const getTodayData = (apiKey) => {
  const date = getNowDate();
  const url = `${apiServer}/api/bwai/v1/dashboard/year/${date.year}/month/${date.month}/day/${date.date}`;
  const config = getConfig(apiKey);

  return Axios.get(url, config)
}