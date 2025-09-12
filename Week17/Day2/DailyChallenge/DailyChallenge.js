let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (groceries) => {
    let groceriesFruit = groceries.fruits
    groceriesFruit.forEach((fruit) => {
        console.log(fruit)
    })
}

displayGroceries(groceries)

const cloneGroceries = ()