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
      const Prev = await getPrevData(apiKey);
      const Today = await getTodayData(apiKey);

      const result = {
        Judge: {
          prev: Prev.judge,
          today: Today.judge
        },
        Masking: {
          prev: Prev.masking,
          today: Today.masking
        },
        Probability: {
          prev: Prev.probability,
          today: Today.probability
        },
        Price: {
          prev: Prev.day_fee,
          today: Today.day_fee
        }
      }

      setUsages(result);
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

async function getPrevData(apiKey) {
  const date = getYesterDayDate();
  const url = `${apiServer}/api/bwai/v1/dashboard/year/${date.year}/month/${date.month}/day/${date.date}`;
  const config = getConfig(apiKey);
  const res = await Axios.get(url, config)
  const result = res.data.result;

  const prevData = result[date.year][date.month][date.date];
  
  return prevData;
}

async function getTodayData(apiKey) {
  const date = getNowDate();
  const url = `${apiServer}/api/bwai/v1/dashboard/year/${date.year}/month/${date.month}/day/${date.date}`;
  const config = getConfig(apiKey);
  const res = await Axios.get(url, config)
  const result = res.data.result;

  const todayData = result[date.year][date.month][date.date];
  
  return todayData;
}