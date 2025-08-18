let allBooks=[
    {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    image: src="https://i.pinimg.com/736x/c2/f8/39/c2f839369c959f7ccc93cf21b0aab368.jpg",
    alreadyRead: true
    },
    {
    title: "Artemix Fowl",
    author: "Eoin Colfer",
    image: src="https://www.artemis-fowl.com/wp-content/uploads/2015/01/artemis-fowl-book-1-cover.png",
    alreadyRead: true,
    }
]
console.log(allBooks)
let div = document.getElementsByTagName("div")[0];
let table = document.createElement('table');
div.appendChild(table);
let thead = document.createElement('thead');
table.appendChild(thead);
let tr1 = document.createElement('tr');
thead.appendChild(tr1);
for (i=0;i<3;i++) {
    let th = document.createElement('th');
    tr1.appendChild(th);
}

let tbody = document.createElement('tbody');
table.appendChild(tbody);
let tr2 = document.createElement('tr');
tbody.appendChild(tr2);
for (i=0;i<3;i++) {
    let td = document.createElement('td');
    tr2.appendChild(td);
}

console.log(div)


