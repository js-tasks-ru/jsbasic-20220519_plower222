function getMinMax(str) {
  let arr = [];
  let arrTemp = str.split(" ");
  for (let value of arrTemp) {
    if (typeof +value === 'number' && isFinite(+value)) {
      arr.push(+value);
    }
  }
  return  {min: Math.min(...arr), max: Math.max(...arr)};
}

let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }