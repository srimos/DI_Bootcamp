export function add1(...numbers){
    let total = 0
    for (let num of numbers){
        total+=num
    }
    return total
}

export function multiply1(...numbers){
    let total = 1
    for (let num of numbers){
        total=total*num
    }
    return total
}