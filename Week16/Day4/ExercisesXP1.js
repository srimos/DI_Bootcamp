// Part 1
// function hello() {
//   alert("Hello World!");
// }
// setTimeout(hello, 2000);

// Part 2
// function hello() {
//     let container = document.getElementById("container");
//     let p = document.createElement("p")
//     p.innerHTML="Hello World!"
//     container.append(p)
// }
// setTimeout(hello, 2000);

// Part 3
let container = document.getElementById("container");

function hello() {
    let p = document.createElement("p")
    p.innerHTML="Hello World!"
    container.append(p)
    if (container.children.length == 5) {
    untimer()
    }
}

let timer= setInterval(hello, 2000);

function untimer() {
    clearInterval(timer)
    console.log("Interval has been cleared")
    container.innerHTML=""
    timer = setInterval(hello, 2000)
} 

let button = document.getElementById("clear");
button.addEventListener("click",untimer)