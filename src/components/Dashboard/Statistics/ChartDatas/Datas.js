const chartDataSetPrototype = () => [{
  backgroundColor: "#30A9DE",
  data: [],
  label: 'Judge'
},
{
  backgroundColor: "#EFDC05",
  data: [],
  label: 'Masking'
},
{
  backgroundColor: "#E53A40",
  data: [],
  label: 'Probability'
},
{
  backgroundColor: "#090707",
  data: [],
  label: 'Price'
}]

const dailyDatas = (data) => {
  var result = chartDataSetPrototype();
  var period = 30;

  // eslint-disable-next-line;
  for (const [year, year_value] of Object.entries(data)) {
    console.log(year, year_value);
    for (const [month, month_value] of Object.entries(year_value)) {
      if (month === 'year_fee') break;

      for (let i = 1; i <= period; i++) {
        if (month_value.hasOwnProperty(i)) {
          result[0].data.push(month_value[i].judge);
          result[1].data.push(month_value[i].masking);
          result[2].data.push(month_value[i].probability);
          result[3].data.push(month_value[i].day_fee);
        } else {
          result[0].data.push(0);
          result[1].data.push(0);
          result[2].data.push(0);
          result[3].data.push(0);
        }
      }
    }
  }
  return result;
}

const monthlyDatas = (data) => {
  var result = chartDataSetPrototype();
  var period = 30;

  for (const [year, year_value] of Object.entries(data)) {
    console.log(year, year_value);

    if (year === 'year_fee') break;

    for (let i = 1; i <= period; i++) {
      if (year_value.hasOwnProperty(i)) {
        result[0].data.push(year_value[i].judge);
        result[1].data.push(year_value[i].masking);
        result[2].data.push(year_value[i].probability);
        result[3].data.push(year_value[i].month_fee);
      } else {
        result[0].data.push(0);
        result[1].data.push(0);
        result[2].data.push(0);
        result[3].data.push(0);
      }
    }
  }

  return result;
}

const yearlyDatas = (data) => {
  var result = chartDataSetPrototype();

  for (const [year, year_value] of Object.entries(data)) {
    console.log(year, year_value);
    result[0].data.push(year_value.judge);
    result[1].data.push(year_value.masking);
    result[2].data.push(year_value.probability);
    result[3].data.push(year_value.year_fee);
  }

  return result;
}

const getDatas = (data, setting) => {
  var result;

  if (setting === 1) { //
    result = dailyDatas(data);
  } else if (setting === 2) {
    result = monthlyDatas(data);
  } else if (setting === 3) {
    result = yearlyDatas(data);
  }

  return result;
}

export default getDatas;