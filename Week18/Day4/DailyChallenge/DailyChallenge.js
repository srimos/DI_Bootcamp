const button=document.getElementById("button")
const form=document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    const formData = new FormData(form)
    const name = formData.get("name")
    const last_name = formData.get("last_name")
    const jsonObj = {
        name: name,
        last_name: last_name
    }
    const jsonString = JSON.stringify(jsonObj)

    const p=document.getElementsByTagName("p")[0]
    p.innerHTML = jsonString
})