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

const cloneGroceries = (client) => {
    user = client
    client = "Betty"
    console.log(user)
    shopping = groceries
    groceries.totalPrice = "35$"
    groceries.other.paid = false
    console.log(shopping)
}
// No modification to user variable because "Betty" is a primitive value and it is pass by value.
// The modification will be reflected in the shopping variable because totalPrice and paid are in the groceries object which is not a primitive value and it is pass by reference.
cloneGroceries (client)
