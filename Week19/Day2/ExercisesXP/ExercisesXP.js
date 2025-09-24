// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
function compareToTen(num){
    return promise1 = new Promise (function (resolve,reject){
        if (num<=10) {
            resolve(num+" is less than or equal to 10")
        } else {
            reject(num+" is greater than 10")
        }
    })
}

compareToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error))

compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))

// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
const promise2 = new Promise (function (resolve,reject){
    setTimeout(()=>{
        resolve("success")
    },4000)
})
promise2.then(result => console.log(result))

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promise3 = Promise.resolve(3)
promise3.then((value)=>console.log(value))
const promise4 = Promise.reject("Boo!")
promise4.catch((error)=>console.log(error))