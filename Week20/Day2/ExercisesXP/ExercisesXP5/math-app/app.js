import {add1,multiply1} from "./math.js"
import pkg from "lodash"
const {add,multiply} = pkg

console.log("Lodash add = ",add(1,2))
console.log("My add = ",add1(1,2))
console.log("Lodash multiply = ",multiply(1,2))
console.log("My multiply = ",multiply1(1,2))
