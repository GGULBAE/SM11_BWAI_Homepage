import getLabels from './ChartDatas/Labels.js';
import getDatas from './ChartDatas/Datas.js';

const convertDataToChartData = (data, setting, setChartData) => {
  const labels = getLabels(setting);
  const datasets = getDatas(data, setting);

  const result = {
    datasets: datasets, // []
    labels: labels // []
  }

  setChartData(result);
}
export default convertDataToChartData;