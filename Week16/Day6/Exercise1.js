// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// a = 3 // a is directly called and overwrites the let value

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? // value of const cannot be modified

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// a = 0 // 

// #2.1 - run in the console:
// funcThree() // a = 0 because a was defined in let as global variable
// funcTwo() 
// funcThree() // a = 5 because a is directly called and overwrites the let value
// #2.2 What will happen if the variable is declared 
// with const instead of let ? a = 0, value of const cannot be modified

//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive() // a  = hello when a not defined as global variable (e.g. let a = 0)

//#4
// const a = 1;
// function funcSix() {
//     const a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// #4.1 - run in the console:
// funcSix() // a = test because it was declared inside a function 
// #4.2 What will happen if the variable is declared 
// with const instead of let ? // a = test because it was declared inside a function 

//#5
// const a = 2;
// if (true) {
//     const a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console // in the if block a = 5 because it was defined in a block scope, outside of the if block a = 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ? in the if block a = 5 because it was defined in a block scope, outside of the if block a = 2