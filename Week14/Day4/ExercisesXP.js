// 🌟 Exercise 1: Simple if/else statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.
let x = 5;
let y = 2;
// Write an if/else statement that checks which number is bigger.
if (x > y) {
    console.log("x is the bigger number")
} else if (y > x) {
    console.log("y is the bigger number")
} else {
    console.log("x and y are equal")
}

// 🌟 Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua"
// Check and display how many letters are in newDog.
console.log(newDog.length)
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’
if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it's my favourite dog breed")
} else {
    console.log("I don't care, I prefer cats")
}

// 🌟 Exercise 3: Even or Odd
// Instructions
// Prompt the user for a number and save it to a variable.

// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.