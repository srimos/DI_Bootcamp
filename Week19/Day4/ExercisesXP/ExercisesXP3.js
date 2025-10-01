// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function starWarsAPI(){
    console.log("Working...")
    try {
    const data = fetch("https://www.swapi.tech/api/starships/9/")
    let response = await data
    let obj = response.json()
    let objectStarWars = await obj
    console.log(objectStarWars.result)  
    } catch (err) {
        console.log("There was an error: ",err)
    }  
    console.log("Work done")
}

starWarsAPI()