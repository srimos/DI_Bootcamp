body = document.getElementsByTagName("body")[0]

let string1 = document.createElement("p")
    string1.setAttribute('class','string1')
    string1.setAttribute('id','string1')
    string1.innerHTML = "Enter a word (small letters only) "
    body.append(string1)

let string1input = document.createElement("input")
    string1input.setAttribute('class','string1input')
    string1input.setAttribute('id','string1input')
    string1.appendChild(string1input)

let string2 = document.createElement("p")
    string2.setAttribute('class','string2')
    string2.setAttribute('id','string2')
    string2.innerHTML = "Enter another word (small letters only) "
    body.append(string2)

let string2input = document.createElement("input")
    string2input.setAttribute('class','string2input')
    string2input.setAttribute('id','string2input')
    string2.appendChild(string2input)

let button = document.createElement("button")
    button.setAttribute('class','button')
    button.setAttribute('id','button')
    button.innerHTML = "Is an anagram?"
    body.append(button)      
    
let string3 = document.createElement("p")
    string3.setAttribute('class','string3')
    string3.setAttribute('id','string3')
    string3.innerHTML = "Answer "
    body.append(string3)

let string3input = document.createElement("input")
    string3input.setAttribute('class','string3input')
    string3input.setAttribute('id','string3input')
    string3input.setAttribute('style','width:350px')
    string3input.readOnly = true
    string3.appendChild(string3input)  

button.addEventListener("click",anagram)

function anagram () {
    string3input.setAttribute("value","")
    word1 = document.getElementById("string1input").value.toLowerCase().trim()
    word1Letters = []
    for (let i=0;i<word1.length;i++){
        if (word1[i]==" "){
            continue
        } else {
        word1Letters.push(word1[i])
        }
    }
    word1Ordered = word1Letters.sort().join("")
    word2 = document.getElementById("string2input").value.toLowerCase().trim()
    word2Letters = []
    for (let i=0;i<word2.length;i++){
        if (word2[i]==" "){
            continue
        } else {
        word2Letters.push(word2[i])
        }
    }
    word2Ordered = word2Letters.sort().join("")

    if (word1Ordered == word2Ordered) {
        string3input.setAttribute("value",true)
    } else {
        string3input.setAttribute("value",false)
    }

    if (word1 == "" || word2 == "") {
        string3input.setAttribute("value","No blanks allowed. Only words accepted!")
    }
}

