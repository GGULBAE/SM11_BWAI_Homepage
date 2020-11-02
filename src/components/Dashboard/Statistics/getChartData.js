import Axios from 'axios';

import getConfig from '../getConfig.js';

const apiServer = process.env.REACT_APP_API_SERVER;

export default async function getChartData(apiKey, setting, setData) {
  const url = getSettedURL(setting);
  const config = getConfig(apiKey);

  Axios.get(url, config)
  .then((res) => {
    setData(res.data.result)
  })
}


const getSettedURL = (setting) => {
  // eslint-disable-next-line
  var {year, month, date} = getNowDate()
  var url;

  month = 10;

  if (setting === 1) {// This Month
    url = `${apiServer}/api/bwai/v1/dashboard/year/${year}/month/${month}/day/01`;
  } else if (setting === 2) { // This Year
    url = `${apiServer}/api/bwai/v1/dashboard/year/${year}/month/01`;
  } else if (setting === 3) { // All Period
    url = `${apiServer}/api/bwai/v1/dashboard/year/2020`;
  }

  return url;
}

const getNowDate = () => {
  const now = new Date();

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate()
  }
}