function ucFirst(str) {
  if (!str.length) {
    return str;
  }
  else {
    let temp = [...str];
    temp[0] = temp[0].toUpperCase();
    return temp.join('');
  }
}

console.log(ucFirst("привет"))
