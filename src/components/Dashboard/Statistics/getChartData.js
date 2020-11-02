import Axios from 'axios';

import getConfig from '../getConfig.js';

const apiServer = process.env.REACT_APP_API_SERVER;

export default function getChartData({apiKey, setting, setData}) {
  const url = `${apiServer}/`; // 추가
  const config = getConfig(apiKey);
  Axios.post(url, config)
  .then((res) => {
    console.log(res);
  })
}