const giphyAPI = () => {
    console.log("Working...")
    fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        .then ((response)=>{ 
            console.log(response)
            if (response.ok==true){
                return response.json()
            } else {
                throw new Error("Something went wrong...")
            }
        }).then((obj)=>{
            console.log(obj)
        }).catch((error)=>{
            console.log(error)
        })
    console.log("Work done")
}
giphyAPI()