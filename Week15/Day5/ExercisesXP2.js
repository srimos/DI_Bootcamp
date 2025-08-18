// 1
document.getElementsByTagName("div")[0].style.background = "lightblue";
document.getElementsByTagName("div")[0].style.padding = "10px";
// 2
document.getElementsByTagName("li")[0].style.display = "none";
// 3
document.getElementsByTagName("li")[1].style.border = "red solid 1px";
// 4
document.querySelectorAll("*").forEach(el => el.style.fontSize = "50px");
// Bonus
if (document.getElementsByTagName("div")[0].style.background === "lightblue") {
    alert("Hello " + document.getElementsByTagName("li")[0].innerHTML + " and " + document.getElementsByTagName("li")[1].innerHTML)
}