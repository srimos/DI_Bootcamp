function makeAllCaps (array) {
    return promise = new Promise (function(resolve,reject){
        let pass = true
        for (let i=0;i<array.length;i++) {
            if (typeof(array[i])=="string"){
                continue
            } else {
                pass = false
            }
        }
        if (pass==true){
            resolve(array.map((word)=>word.toUpperCase()))
        } else {
            reject("Not all the words in the array are strings.")
        }
    })
}

function sortWords (array) {
    return promise = new Promise (function(resolve,reject){
        if (array.length>4){
            resolve(array.sort())
        } else {
            reject("The array length is less than or equal to 4")
        }
    })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then(arr => sortWords(arr))
      .then(result => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then(arr => sortWords(arr))
      .then(result => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then(arr => sortWords(arr))
      .then(result => console.log(result))
      .catch(error => console.log(error))
