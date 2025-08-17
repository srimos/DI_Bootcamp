document.getElementsByTagName("div")[0].style.background = "lightblue";
document.getElementsByTagName("div")[0].style.padding = "10px";
document.getElementsByTagName("li")[0].style.display = "none";
document.getElementsByTagName("li")[1].style.border = "red solid 1px";
document.querySelectorAll("*").forEach(el => el.style.fontSize = "50px");
if (document.getElementsByTagName("div")[0].style.background === "lightblue") {
    alert("Hello " + document.getElementsByTagName("li")[0].innerHTML + " and " + document.getElementsByTagName("li")[1].innerHTML)
}