function isEmpty(obj) {
  let score = true;
  for (let key in obj) {
    score = false;
  }
  return score;
}
