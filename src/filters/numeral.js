import numeral from 'numeral';

const formatNumber = (num) => {
  console.log('num', num)
  if (!num) return 0;
  return numeral(Number(num)).format()
}

export default {
  formatNumber
}