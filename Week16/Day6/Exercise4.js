const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color,i) => {
        console.log(`${i+1}# choice is ${color}`)
})

colors.some((color)=> {return color=="Violet"}) ? console.log("Yeah") : console.log("No...")
