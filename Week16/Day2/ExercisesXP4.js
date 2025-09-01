// 1
allBoldItems=[]

function getBoldItems() {
    let boldItems=document.getElementsByTagName("strong")
    for (let i=0;i<boldItems.length;i++) {
        allBoldItems.push(boldItems[i])
    }
    return allBoldItems
}

getBoldItems()

// 2
function highlight() {
    for (let item of allBoldItems) {
        item.style.color="blue"
    }
    console.log("All bold text changed to blue!")
}
highlight()

// 3
function returnItemsToDefault(){
    for (let item of allBoldItems) {
        item.style.color=""
    }
    console.log("All bold text changed back to default!")
}
returnItemsToDefault()

// 4
let paragraph=document.getElementsByTagName("p")

for (let p of paragraph){
p.addEventListener("mouseover",highlight)
p.addEventListener("mouseout",returnItemsToDefault)
}