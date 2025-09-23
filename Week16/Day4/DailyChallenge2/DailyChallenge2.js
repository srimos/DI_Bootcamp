const input=document.getElementById("input")
const error=document.getElementById("error_message")

input.addEventListener("input",()=>check(input.value))


function check(value){
    error.innerHTML=""
    let chars = value.split("")
    for (let i=0;i<chars.length;i++) {
        if (checkChar(chars[i])!="Letter") {
            error.innerHTML="Letters only please. Numbers and special characters not accepted."
            chars.splice(i, 1) 
            i-- 
        }
    }
    input.value = chars.join("")
}

//regular expression//
function checkChar(ch) {
    if (/[a-zA-Z]/.test(ch)) {
        return "Letter";
    } else if (/[0-9]/.test(ch)) {
        return "Number";
    } else {
        return "Special Character";
    }
}