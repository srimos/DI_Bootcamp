const input = document.getElementById("input")

const button = document.getElementById("button")
button.addEventListener("click",async function(){
    event.preventDefault()
    deleteall.style.display="inline-block"
    let data = await giphyAPI(input.value)
    let gifURL = data.images.original.url
    let img = document.createElement("img")
    img.id= gifCounter
    img.src = gifURL
    let del = document.createElement("button")
    del.id = gifCounter
    del.innerHTML="Delete"
    del.addEventListener("click",function(){
        del.parentNode.remove()
    })
    let div = document.createElement("div")
    div.id = gifCounter
    gifs.appendChild(div)
    div.appendChild(img)
    div.appendChild(del)
    gifCounter++
    console.log(gifCounter)
})

let gifCounter=0

const gifs = document.getElementById("gifs")

async function giphyAPI(input){
    console.log("Working...")
    try {
    console.log(input)    
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?q=${input}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    let data = await response.json()
    console.log(data.data)
    return data.data
    } catch (err) {
        console.log("There was an error: ",err)
    }  
    console.log("Work done")
}

