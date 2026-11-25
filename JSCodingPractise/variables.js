// console.log(a) //no behavior defined - ReferenceError: a is not defined

let a = 10; //ReferenceError: Cannot access 'a' before initialization

//Call back function:

function add(n1, n2){
    console.log(n1 + n2)
}
function sub (n1, n2){
    console.log (n1 - n2)
}
function calculate (operations, n1, n2){
    operations (n1, n2);
}

calculate (add, 30, 30);
calculate (sub, 30, 30);


