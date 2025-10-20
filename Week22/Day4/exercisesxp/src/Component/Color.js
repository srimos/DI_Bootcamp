import {useState,useEffect} from 'react'

function Color () {
    const [favoriteColor,setFavoriteColor] = useState("red")

    useEffect(()=>{
        setFavoriteColor("yellow")
        alert("useEffect reached")
    },[])

    const changeColor = () => {
        setFavoriteColor("blue")
    }

    return (
        <>
        <h1 style={{color:favoriteColor}}>My Favorite Color is {favoriteColor}</h1>
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}    

export default Color