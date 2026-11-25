let a= 6;

console.log(a++); //post increment -- so 'a' will be 6 here
console.log(a)      // it will be 7 after here
a=6;
console.log(++a) //now a is preincremented - a will be 7

a = 10;
let b = 10;

console.log(a==b) // return true

//string comparison using "=="
b = "10";

console.log(a==b) // returns true here also so we need to use "===" JS will not check the data type and hence it is true for "=="

a = "Vinoth"
b = "vinoth"

console.log(a==b)

// OR statement

console.log (true || false); //returns true - note if the first statement is true it will return true and does not check the second statement

console.log ( 1 || 2 ) // returns 1 because 1 itself is true second statement is not executed

console.log ( 0 || 2 ) // returns  2 since 0 is false

console.log (2 && 3) // returns 3 && condtion run both statements and prints the last one

console.log("RT"+ 10); // string concatenation "RT10"

console.log("RT" + 10+ 20); // string concatenation "RT1020"

console.log(10 + "RT" + 10+ 20); //returns 10RT1020

console.log(10 + 10 + "RT" + 10+ 20); //returns 30RT1020 => if it finds an operator before the string then it adds

console.log ("RT" - 10) //returns - NaN - [Not a Number]
console.log ("10" - 10) //returns - 0

console.log ("RT10" - 10) //returns - NaN

console.log(true+1) //returns 2 because true is 1

console.log(false == 0)     //returns true because false is 0
console.log(false === 0)    //returns false "===" checks the data type and then it check the value

console.log(null == 0)

console.log(null == undefined)  //returns true

console.log(null === undefined) //returns false - because the data types are different 

console.log(1 + null)   // 1
console.log(1 + undefined) //Nan

console.log(null)   //returns null

console.log(undefined)  //returns undefined

console.log(null==0)  //false
console.log(undefined==0)  //false

//undefined means a variable has been declared but a value has not been assigned.
// Example:
// - A function does not return a value.
// - Accessing a non-existent object property.
// - A function parameter is not provided.

//null is an intentional absence of a value. A developer explicitly assigns it.

let x;  //undefined
let y=null;

console.log(x); //undefined
console.log(Y); //ReferenceError: Y is not defined

//Interview tip: A good answer in an interview is: "undefined generally means a value hasn't been assigned, whereas null is an explicitly assigned empty value."