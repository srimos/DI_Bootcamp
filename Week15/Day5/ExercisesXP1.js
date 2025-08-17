console.log(document.getElementById("container"));
let ul1=document.getElementsByTagName("ul")[0];
ul1.children[1].innerHTML="Richard"
let ul2=document.getElementsByTagName("ul")[1];
let li2=ul2.children[1]
ul2.removeChild(li2)
let items = document.querySelectorAll("#myList li");
for (i=0;i<2;i++) {
    document.getElementsByTagName("ul")[i].children[0].innerHTML="Shaun"
}
for (i=0;i<2;i++) {
    document.getElementsByTagName("ul")[i].classList.add("student_list")
}
document.getElementsByTagName("ul")[0].classList.add("university")
document.getElementsByTagName("ul")[0].classList.add("attendance")
console.log(document.getElementsByTagName("ul"))