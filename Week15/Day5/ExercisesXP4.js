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
    alreadyRead: false
    }
];
console.log(allBooks)
let div = document.getElementsByTagName("div")[0];
let tableNew = document.createElement('table');
div.appendChild(tableNew);
let theadNew = document.createElement('thead');
tableNew.appendChild(theadNew);
let theadrNew = document.createElement('tr');
theadNew.appendChild(theadrNew);
for (i=0;i<2;i++) {
    let thNew = document.createElement('th');
    theadrNew.appendChild(thNew);
}
document.getElementsByTagName("th")[0].textContent = "Title and Author"
document.getElementsByTagName("th")[1].textContent = "Image"

let tbodyNew = document.createElement('tbody');
tableNew.appendChild(tbodyNew);

for (i=0;i<2;i++) {
    let tbodyrNew = document.createElement('tr');
    tbodyNew.appendChild(tbodyrNew);
    for (j=0;j<2;j++) {
        let tdNew = document.createElement('td');
        tbodyrNew.appendChild(tdNew);
    }
    document.getElementsByTagName("tr")[i+1].firstChild.textContent = `${allBooks[i].title} written by ${allBooks[i].author}`;
    let imageNew=document.createElement('img');
    imageNew.src=allBooks[i].image;
    imageNew.setAttribute('style','width:100px;');
    document.getElementsByTagName("tr")[i+1].firstChild.nextSibling.appendChild(imageNew)
    if (allBooks[i].alreadyRead == true) {
    document.getElementsByTagName("tr")[i+1].setAttribute('style','color:red');
    }
}



// let trNew3 = document.createElement('tr');
// tbodyNew.appendChild(trNew3);
// for (i=0;i<2;i++) {
//     let tdNew = document.createElement('td');
//     trNew3.appendChild(tdNew);
// }
// document.getElementsByTagName("td")[2].textContent = `${allBooks[1].title} written by ${allBooks[1].author}`;
// let imageNew2=document.createElement('img');
// imageNew2.src=allBooks[1].image;
// imageNew2.setAttribute('style','width:100px;');
// document.getElementsByTagName("td")[3].appendChild(imageNew2)
// // document.getElementsByTagName("td")[1].src = allBooks[0].image;
// if (allBooks[1].alreadyRead == true) {
//     document.getElementsByTagName("tr")[2].setAttribute('style','color:red');
// }

console.log(div)