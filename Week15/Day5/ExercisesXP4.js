let allBooks=[
    {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    image: "https://i.pinimg.com/736x/c2/f8/39/c2f839369c959f7ccc93cf21b0aab368.jpg",
    alreadyRead: true
    },
    {
    title: "Artemis Fowl",
    author: "Eoin Colfer",
    image: "https://www.artemis-fowl.com/wp-content/uploads/2015/01/artemis-fowl-book-1-cover.png",
    alreadyRead: true
    }
];
console.log(allBooks)
let div = document.getElementsByTagName("div")[0];
let tableNew = document.createElement('table');
div.appendChild(tableNew);
let theadNew = document.createElement('thead');
tableNew.appendChild(theadNew);
let trNew1 = document.createElement('tr');
theadNew.appendChild(trNew1);
for (i=0;i<2;i++) {
    let thNew = document.createElement('th');
    trNew1.appendChild(thNew);
}

document.getElementsByTagName("th")[0].textContent = "Title and Author"
document.getElementsByTagName("th")[1].textContent = "Image"

let tbodyNew = document.createElement('tbody');
tableNew.appendChild(tbodyNew);

let trNew2 = document.createElement('tr');
tbodyNew.appendChild(trNew2);
for (i=0;i<2;i++) {
    let tdNew = document.createElement('td');
    trNew2.appendChild(tdNew);
}
document.getElementsByTagName("td")[0].textContent = `${allBooks[0].title} written by ${allBooks[0].author}`;
let imageNew1=document.createElement('img');
imageNew1.src=allBooks[0].image;
imageNew1.setAttribute('style','width:100px;');
document.getElementsByTagName("td")[1].appendChild(imageNew1)
// document.getElementsByTagName("td")[1].src = allBooks[0].image;
if (allBooks[0].alreadyRead == true) {
    document.getElementsByTagName("tr")[1].setAttribute('style','color:red');
}

let trNew3 = document.createElement('tr');
tbodyNew.appendChild(trNew3);
for (i=0;i<2;i++) {
    let tdNew = document.createElement('td');
    trNew3.appendChild(tdNew);
}
document.getElementsByTagName("td")[2].textContent = `${allBooks[1].title} written by ${allBooks[1].author}`;
let imageNew2=document.createElement('img');
imageNew2.src=allBooks[1].image;
imageNew2.setAttribute('style','width:100px;');
document.getElementsByTagName("td")[3].appendChild(imageNew2)
// document.getElementsByTagName("td")[1].src = allBooks[0].image;
if (allBooks[1].alreadyRead == true) {
    document.getElementsByTagName("tr")[2].setAttribute('style','color:red');
}

console.log(div)