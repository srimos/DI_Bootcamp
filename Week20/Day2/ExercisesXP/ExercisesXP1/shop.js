const products = require("./products.js");

function searchProduct(productName){
    const item = products.find(p => p.name == productName)
    if (item) {
        console.log(item)
    } else {
        console.log(`${productName} does not exist.`)
    }
}

searchProduct("apple");
searchProduct("banana");
searchProduct("watermelon");