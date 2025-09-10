// 🌟 Exercise 1 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
let arrow = (x,y) => {
    return x+y
}
console.log(arrow(1,2));

// 🌟 Exercise 2 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
function kilogramToGram (weight) {
    console.log("Weight: "+weight+"kg")
    weightInGram=weight*1000
    console.log("Weight in grams: "+weightInGram+"g")
}
kilogramToGram(1);

let kilo = function(weight) {
    console.log("Weight: "+weight+"kg")
    weightInGram=weight*1000
    console.log("Weight in grams: "+weightInGram+"g")
}
kilo(1);

// 🌟 Exercise 3 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function (numberOfChildren,partnerName,location,jobTitle) {
    document.getElementsByTagName("p")[0].innerHTML=(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`)
})(2,"Stella","Mauritius","software engineer")

// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the navbar, displaying the name of the user and his profile picture.
