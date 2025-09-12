// let names = ['nayar','Abraham','rita']
// // let has5charsorless = [1,0,1]

// // give me all students whose names have 5 or less characters
// function has5charsorless(value){
//     if (value.length<=5) {
//         return true
//     }
//     return false
//     // expecting boolean return
// }
// names.filter(has5charsorless)
// names.filter((value) => value.length<=5)

// let myarr = [1,4,9,16]

// // 0; 0+1; 1 + 4; 5+9; 14+16

// //sum 
// // function addnumbers(accumulator,value){
// //     return accumulator + value
// // }

// // myarr.reduce(addnumbers,0)

// shorter version
// myarr.reduce((accummulator,value)=>accummulator+value);

// find the maximum
let myarr = [1,4,9,16,56,34,6,8]

// myarr.reduce((accummulator,value)=>value>accummulator?value:accummulator)

// //count the numbers in the array
// function count_numbers(acc,value){
//     if (value){
//         acc+=1
//     }
//     return counter
// }
// myarr.reduce(count_numbers,0)

function smallestNumberAbove10 (myarr){
    if (myarr.value>10){
        return myarr
}