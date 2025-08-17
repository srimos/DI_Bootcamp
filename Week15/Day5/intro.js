console.log(document);
console.log(document.body);
console.log(document.head);

console.log(document.children[0]); //html

html=document.children[0];

console.log(html.children[1]); //body

body=html.children[1];
div=body.firstElementChild;
console.log(div); //div

div=document.getElementsByTagName("div")[0]; //selector
console.log(div); //div

body=html.children[1];
ul=body.children[1]
console.log(ul); //ul

ul=document.getElementsByTagName("ul")[0]; //selector
console.log(ul); //ul

liPete=ul.children[1];
console.log(liPete);