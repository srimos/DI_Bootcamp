planets=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
let div = document.querySelector(".listPlanets")
for (planet of planets) {
    let p = document.createElement("div");
    p.classList.add("planet",planet)
    p.textContent=planet
    p.setAttribute('style','color:white;')
    div.appendChild(p)
    let br = document.createElement("br");
    div.appendChild(br);
}