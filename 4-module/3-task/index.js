function highlight(table) {
  let rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    let searchAttr = 0;
    let fullRow = rows[i];
    let row = fullRow.cells;
    for (let j = 0; j < row.length; j++) {
      let td = row[j];
      if (td.hasAttribute("data-available")) {
        searchAttr += 1;
      }
      if (searchAttr > 0) {
        if (td.getAttribute("data-available") === "true") {
          fullRow.classList.add("available");
        } else if (td.getAttribute("data-available") === "false") {
          fullRow.classList.add("unavailable");
        }
      }
      if (td.innerHTML === "f") {
        fullRow.classList.add("female");
      }
      if (td.innerHTML === "m") {
        fullRow.classList.add("male");
      }
      if (+td.innerHTML < 18) {
        fullRow.style = "text-decoration: line-through";
      }
    }
    if (searchAttr === 0) {
      fullRow.hidden = "true";
    }
  }
}
