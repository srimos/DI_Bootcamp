// 🌟 Exercise 1 : HTML Form
// Instructions
// Hint : Read about sending form data using the HTTP protocol

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?
// In the web address bar

// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab
// Network >> Payload

// 🌟 Exercise 3 : JSON Mario
// Instructions
// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
console.log(marioGame)
// Convert this JS object into a JSON object. What happens to the nested objects ?
let marioGamejson = JSON.stringify(marioGame)
console.log(marioGamejson)
// Nested objects are converted into string.
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
let marioGamejsonpp = JSON.stringify(marioGame,null,2)
console.log(marioGamejsonpp)
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.