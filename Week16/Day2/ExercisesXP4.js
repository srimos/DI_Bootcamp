let form = document.getElementById("MyForm");
let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

form.addEventListener("submit", getUserComments)
 
function clearErrors(){
    radius.setCustomValidity("")
} 

radius.addEventListener("input", clearErrors)

function getUserComments(e) {
    e.preventDefault()
    let radiususer=parseInt(radius.value)
    if (!Number.isInteger(radiususer)) {
        radius.setCustomValidity("Only numbers please.");
    }

    if (!form.reportValidity()) {
        return; 
    }

    let cubed=radiususer**3
    let volumeanswer=4/3*Math.PI*cubed
    let volume2d=parseFloat(volumeanswer.toFixed(2))
    volume.value=volume2d

}