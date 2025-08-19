// 1
console.log(document.getElementById("container"));
// 2
let ul1=document.getElementsByTagName("ul")[0];
ul1.children[1].innerHTML="Richard"
// 3
let ul2=document.getElementsByTagName("ul")[1];
let li2=ul2.children[1]
ul2.removeChild(li2)
// 4
let items = document.querySelectorAll("#myList li");
for (i=0;i<2;i++) {
    document.getElementsByTagName("ul")[i].children[0].innerHTML="Shaun"
}
// Bonus 1
for (i=0;i<2;i++) {
    document.getElementsByTagName("ul")[i].classList.add("student_list")
}
// Bonus 2
document.getElementsByTagName("ul")[0].classList.add("university")
document.getElementsByTagName("ul")[0].classList.add("attendance")
// check
console.log(document.getElementsByTagName("ul"))