planets=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
planetinfo=[
    {
    "Mercury":"brown",
    "Venus":"pink",
    "Earth":"turquoise",
    "Mars":"red",
    "Jupiter":"orange",
    "Saturn":"yellow",
    "Uranus":"blue",
    "Neptune":"purple"
    },
    {
    "Mercury":0,
    "Venus":0,
    "Earth":1,
    "Mars":2,
    "Jupiter":97,
    "Saturn":274,
    "Uranus":28,
    "Neptune":16 
    }
];
let div = document.querySelector(".listPlanets");
for (planet of planets) {
    let p = document.createElement("div");
    p.classList.add("planet",planet);
    p.textContent=planet;
    p.setAttribute('style',`color:grey;background-color:${planetinfo[0][planet]}`);
    div.appendChild(p);
    let br = document.createElement("br");
    div.appendChild(br);
    if (planetinfo[1][planet]!=0) {
        for (i=0;i<planetinfo[1][planet];i++) {    
            let m = document.createElement("div");
            m.classList.add("moon",planet);
            m.setAttribute('style',`left:${150 + i * 50}px`);
            p.appendChild(m);
            console.log(i)
        }
    } else {
        continue;
    }
}