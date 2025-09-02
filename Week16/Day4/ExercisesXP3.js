let dropzone = document.getElementById("target")
let dragbox = document.getElementById("box")
dragbox.setAttribute("draggable",true)
dragbox.addEventListener("dragstart", dragStart)

function dragStart(event){
  event.dataTransfer.setData("text", event.target.id);
  event.dataTransfer.effectAllowed = "move";
}

dropzone.addEventListener("dragover", dragOver)
dropzone.addEventListener("drop", drop)
dropzone.addEventListener("dragenter", dragEnter)
dropzone.addEventListener("dragleave", dragLeave)

function dragOver(event){
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let dataSquare = event.dataTransfer.getData("text");
  let data = document.getElementById(dataSquare)
  dropzone.appendChild(data);
}

function dragEnter(event){
  dropzone.style.backgroundColor = "lightblue"
  dropzone.classList.add('over');
}

function dragLeave(event){
  dropzone.style.backgroundColor = "yellow"
  dropzone.classList.remove('over');
}