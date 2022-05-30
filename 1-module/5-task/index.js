function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substring(0, maxlength - 1) + "…";
  }
  else return str;
}

// console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))


// console.log(truncate('Всем привет!', 20))