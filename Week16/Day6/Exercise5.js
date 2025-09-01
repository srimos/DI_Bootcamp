const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

const ord =(i)=>{
        if (i!=1 && i!=2 && i!=3){
                return ordinal[0];
        } else {
                return ordinal[i];
        }
}

colors.forEach((color,i) => {
        console.log(`${i+1}${ord(i+1)} choice is ${color}`)
})