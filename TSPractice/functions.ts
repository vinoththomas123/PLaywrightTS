function calculate(callback:(num1: number, num2: number)=>number, n1:number, n2: number):number{
    return callback(11, 20);
}

function add(n1: number, n2: number): number{
    return n1 + n2;
}

function mult(n1: number, n2: number): number{
    return n1 + n2;
}

let res1 = calculate (add, 30, 40);
console.log("Addition: ", res1);

let res2 = calculate (mult, 30, 40);
console.log("Multiplication: ", res2);

//Alternate way - create a data type for the function
type operation = (num1: number, num2: number)=>number;  //return number datatype

function calculate2(operations: operation, n1:number, n2: number):number{
    return operations(n1, n2);
}

//Simplification of same

let add1:operation = (n1, n2)=>  n1 + n2;

let mult1:operation = (n1, n2)=>  n1 * n2;

function calculate3(operations: operation, n1:number, n2: number):number{
    return operations(n1, n2);
}