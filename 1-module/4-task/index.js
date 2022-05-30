function checkSpam(str) {
  return str.toLowerCase().includes("1xbet") || str.toLowerCase().includes("xxx");
}


console.log(checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))