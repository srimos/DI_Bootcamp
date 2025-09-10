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
    let body = document.getElementsByTagName("body")[0];
    let fortune = document.createElement("p");
    fortune.setAttribute("id","fortune");
    body.appendChild(fortune)
    document.getElementById("fortune").innerHTML=(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`);
})(2,"Stella","Mauritius","software engineer");

// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the navbar, displaying the name of the user and his profile picture.
(function (name) {
    let nav = document.getElementsByTagName("nav")[0];
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";

    let profileDiv = document.createElement("div");
    profileDiv.style.display = "flex";
    profileDiv.style.alignItems = "center"; 
    profileDiv.style.gap = "10px";

    let profilePic = document.createElement("img");
    profilePic.src="make-you-a-minimalist-profile-picture.png";
    profilePic.alt = "Placeholder image";
    profilePic.style.width = "100px";
    profileDiv.append(profilePic);

    let textDiv = document.createElement("div");

    let profileGreeting = document.createElement("p");
    profileGreeting.innerHTML="Welcome!";
    profileGreeting.style.margin = "0";
    profileGreeting.style.color = "white";
    textDiv.append(profileGreeting);

   let profileName = document.createElement("p");
    profileName.innerHTML=`${name}`;
    profileName.style.margin = "0";
    profileName.style.color = "white";
    textDiv.append(profileName);;

    profileDiv.append(textDiv);
    textDiv.style.margin="10px";
    nav.append(profileDiv);
})("John");

// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
// function makeJuice (beverageSize) {
//     function addIngredients (firstIngredient,secondIngredient,thirdIngredient) {
//         let body = document.getElementsByTagName("body")[0];
//         let juice = document.createElement("p");
//         juice.setAttribute("id","juice");
//         body.appendChild(juice)
//         document.getElementById("juice").innerHTML=(`The client wants a ${beverageSize} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}.`);
//     } 
//     return addIngredients
// }
// makeJuice("small")("strawberries","blueberries","raspberries");
// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice (beverageSize) {
    ingredients=[]

    function addIngredients (firstIngredient,secondIngredient,thirdIngredient) {
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient)
    }
        
    function displayJuice () {
        let body = document.getElementsByTagName("body")[0];
        let juice = document.getElementById("juice")
        if (!juice) {
            juice = document.createElement("p")
            juice.setAttribute("id","juice");
            body.appendChild(juice)
        }
        juice.innerHTML = `The client wants a ${beverageSize} juice, containing ${ingredients.join(", ")}.`
    }
    
    addIngredients("strawberries","blueberries","raspberries")
    addIngredients("mulberries","blackberries","cranberries")
    displayJuice()
}
makeJuice("large")