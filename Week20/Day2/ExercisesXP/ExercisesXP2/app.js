import {persons as data} from  "./data.js";

function averageAge(data){
    let totalAge = 0
    for (let i=0;i<data.length;i++){
        totalAge += data[i].age
    }
    let averageAge=totalAge/data.length
    console.log(`The average age is ${averageAge}.`)
}

averageAge(data)