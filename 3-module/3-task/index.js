function camelize(str) {
  str = str.split("-");
  let arr = upperCaseFirstElement(str);
  return arr.join('');
}

function upperCaseFirstElement(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      tempArr.push(arr[0]);
    }
    else {
      arr.shift(0);
      let tempValue = arr.map(value => value[0].toUpperCase() + value.substr(1));
      tempArr.push(tempValue.join(""));
    }
  }
  return tempArr;
}

console.log(camelize('my-short-string'));