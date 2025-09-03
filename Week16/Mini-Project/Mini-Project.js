const grid = document.getElementById("drawing_grid");
  for (let i = 1; i <= 400; i++) {
    let cell = document.createElement('div');
    cell.textContent = i;
    grid.appendChild(cell);
  }