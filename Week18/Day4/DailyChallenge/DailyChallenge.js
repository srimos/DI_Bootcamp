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
    const jsonString = JSON.stringify(jsonObj,null,2)

    const pre=document.getElementsByTagName("pre")[0]
    pre.innerHTML = jsonString
})