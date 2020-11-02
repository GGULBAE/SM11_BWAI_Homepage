const dailyLabels = () => Array.from(Array(30), (e, i) => i + 1);
const monthAlphabet = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
];
const monthlyLabels = () => Array.from(Array(12), (e, i) => monthAlphabet[i]);
const yearlyLabels = () => [2020];

const getLabels = (setting) => {
  var result;

  if (setting === 1) {
    result = dailyLabels();
  } else if (setting === 2) {
    result = monthlyLabels();
  } else {
    result = yearlyLabels();
  }

  return result;
}

export default getLabels;