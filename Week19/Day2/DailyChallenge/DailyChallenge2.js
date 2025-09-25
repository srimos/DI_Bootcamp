const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(morse) {
    return promise1 = new Promise (function(resolve,reject){
        let morseJS=JSON.parse(morse)
        if (!morseJS || Object.keys(morseJS).length === 0) {
            reject("Morse Javascript Object is empty.")
        } else {
            resolve(morseJS)
        }
    })
}

function toMorse(morseJS) {
    let userInput = prompt("Enter a word or sentence: ")
    let userInputLowerCase = userInput.toLowerCase()
    let pass=true
    let morseTranslation = []
    return promise2 = new Promise (function (resolve,reject){
        for (let i=0;i<userInputLowerCase.length;i++){
            if (userInputLowerCase[i] in morseJS) {
                morseTranslation.push(morseJS[userInputLowerCase[i]])
            } else if (userInputLowerCase[i] == " ") {
                morseTranslation.push("/")
            } else {
                pass=false
            }
        }
        
        if (pass == false) {
            reject("One or more characters do not exist in the Morse Javascript Object.")
        } else {
            resolve([morseTranslation,userInput])
        }
    })
}

function joinWords([morseTranslation,userInput]){
    let body=document.getElementsByTagName("body")[0]
    let div=document.createElement("div")
    div.innerHTML=`"${userInput}" gives you:`
    body.append(div)
    for (let i=0;i<morseTranslation.length;i++) {
        let div=document.createElement("div")
        div.innerHTML=morseTranslation[i]
        body.append(div)
    }
    return userInput
}

toJs(morse)
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .then(result => console.log(result))
    .catch(error => console.log(error))