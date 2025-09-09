i=5

function insertRow () {
    i+=1
    table=document.getElementById("sampleTable")
    newrow=document.createElement("tr")
    table.append(newrow)
    newcell1=document.createElement("td")
    newrow.append(newcell1)
    newcell2=document.createElement("td")
    newrow.append(newcell2)
    newcell1.textContent=`Row${i} cell1`
    newcell2.textContent=`Row${i} cell2`
}    

let delete_student = function (event){
    console.log(event.target.innerHTML)
    let num = event.target.innerHTML.substring(15)
    document.getElementById("tr"+num).remove()
}

let students = [
    {
        "name":"Shaun",
        "address":"Tombeau Bay"
    },
    {
        "name":"Stella",
        "address":"Curepipe"
    },
    {
        "name":"Abigail",
        "address":"Grand Baie"
    },
]

window.onload = function (){
    for (let i=0;i<students.length;i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let deleteButton = document.createElement("button")
        deleteButton.innerHTML="Delete Student"+i
        deleteButton.addEventListener("click",delete_student)
        tr.append(td1)
        tr.append(td2)
        td1.textContent=students[i].name
        td2.textContent=students[i].address
        document.getElementById("sampleTable").append(tr)
    }
}