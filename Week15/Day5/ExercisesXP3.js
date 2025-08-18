// 1
let navBar = document.getElementById("navBar");
navBar.setAttribute('id', "socialNetworkNavigation");
console.log(navBar.getAttribute('id'));
// 2
let listUl = document.getElementsByTagName("ul")[0];
let listLi = document.createElement("li");
let listText = document.createTextNode('Logout');
listLi.appendChild(listText);
listUl.appendChild(listLi);
// 3
console.log(listUl.firstElementChild.textContent);
console.log(listUl.lastElementChild.textContent);