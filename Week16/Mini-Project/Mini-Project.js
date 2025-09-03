const colour_chart = ["red","orange","yellow","green","blue","purple","aqua","black","lightgreen","brown","lightcoral","lightcyan","lightyellow","lightpink","pink","magenta","lime","orangered","plum","silver","deeppink"];

let selectedColour = ""
let isMouseDown = false;

const colour_grid = document.getElementById("colour_grid");

function removeHighlight(cell) {
  cell.classList.remove("selected");
}

for (let i = 0; i < 21; i++) {
  let colour_cell = document.createElement('div');
  colour_cell.style.backgroundColor = colour_chart[i];
  colour_cell.id = `colour_${i}`;
  colour_cell.classList.add("colour_cell")
  colour_cell.addEventListener("click",function(){
    selectedColour = colour_chart[i]
    document.querySelectorAll(".colour_cell").forEach(removeHighlight);
    colour_cell.classList.add("selected");
  })
  colour_grid.appendChild(colour_cell);
}

const drawing_grid = document.getElementById("drawing_grid");
for (let i = 1; i <= 1200; i++) {
  let drawing_cell = document.createElement('div');
  drawing_cell.id = `grid_${i}`;
  drawing_cell.className = "drawing_cell"
  drawing_cell.addEventListener("mousedown", function () {
    if (selectedColour) {
      drawing_cell.style.backgroundColor = selectedColour;
      isMouseDown = true;
    }
  });
  drawing_cell.addEventListener("mouseover", function () {
    if (isMouseDown && selectedColour) {
      drawing_cell.style.backgroundColor = selectedColour;
    }
  });
  drawing_cell.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
  drawing_grid.appendChild(drawing_cell);
}  

const clear_button = document.getElementById("clear_button");
clear_button.addEventListener("click",function(){
  selectedColour=""
  document.querySelectorAll(".drawing_cell").forEach(cell => {
      cell.style.backgroundColor = "white"
  })
  document.querySelectorAll(".colour_cell").forEach(removeHighlight);
})