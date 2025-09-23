let user = ""
let ai = ""
let turn = ""

const choose = document.getElementById("choose")

const X = document.getElementById("X")
const O = document.getElementById("O")

X.addEventListener("click",playX)
O.addEventListener("click",playO)

function pickSquare (e){
    if (e.target.innerHTML == "X" || e.target.innerHTML == "O") {
        alert("This square has already been chosen. Pick another square.")
    } else {
        e.target.innerHTML = user
    }
}

function playX(){
    choose.style.display="none"
    user="X"
    ai="O"
    turn="X"
    generate_board()
    // checkForWinner()
}

function playO(){
    choose.style.display="none"
    user="O"
    ai="X"
    turn="O"
    generate_board()
    // checkForWinner()
}

function generate_board(){
    const board = document.getElementById("board")
    
    const table = document.createElement("table")
    table.innerHTML= "<tbody><tr><td id='r1c1'></td><td id='r1c2'></td><td id='r1c3'></td></tr><tr><td id='r2c1'></td><td id='r2c2'></td><td id='r2c3'></td></tr><tr><td id='r3c1'></td><td id='r3c2'></td><td id='r3c3'></td></tr></tbody>"
    board.append(table)

    const tds = document.querySelectorAll("td")
    tds.forEach(td=> {
        td.addEventListener("click",pickSquare)
    })
}

// function checkForWinner (){
//     if 
// }