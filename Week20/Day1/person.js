const name = "Mike Taylor"
const car = "Ford Mustang"
const helloWorld = function () {
    return "Hello World from module"
}

// module.exports.name = name
// module.exports.car = car
// module.exports.helloWorld = helloWorld

module.exports = {name, car, helloWorld}