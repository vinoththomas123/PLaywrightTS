let arr: number[] = [1, 2, 3, 4, 5]
let arr1 = new Array();     //Javascript

arr1.push("a");
arr1.push("b");
arr1.push("c");     //add at the end
console.log(arr1);

arr1.unshift("z");  //add at the begining

arr1.pop(); //delete the last element

arr1.shift(); //deleting the first element

arr.reverse();  //reverse
console.log(arr) 

for (let item of arr){
    console.log(item);
}

arr.sort();
for (let idx in arr){
    console.log(arr[idx]);
}

let slicedArr = arr.slice(2);     //substring - to get a particular indexed elements starting from 3rd index
console.log(slicedArr);

let splicedArr = arr.splice(2,4);   //delete elements - start from 3rd position and until 5th element will be removed
console.log(splicedArr) 

console.log(arr) ;
// splicedArr = arr.splice(index, count); //1. index of element and 2. no. of elements to remove remove 1 emenent 
splicedArr = arr.splice(0,1);   //To remove first element alone

console.log(arr) ;
arr = [1, 2, 3, 4, 5]
console.log(arr) ;

for (let item of arr){
    if (item%2==0){
        console.log(item)
    }
}

// let res = arr.filter(callBack, );

let filteredArr = arr.filter((item)=>item%2==0);   // [ 2, 4 ]  - Filter will apply only to true values and not to false values
console.log(filteredArr)

let res1 = filteredArr.map((item)=>item*2);       // [ 4, 8 ] - applies to each element in array
console.log(res1)

// arr.reduce(callBack and operation, additionalValue)     reduce to single unit 


let addingAllArrayElements = arr.reduce((n1, n2)=>n1+n2, 0)    // reduce to single unit, n1+n2 then it will add all the elements in the array
console.log(addingAllArrayElements)

let addingElements = arr.reduce((n1, n2)=>n1+n2, 10)    // it will add all the elements in the array and also adds 10 to the result
console.log(addingElements)

let findValue = arr.find((n1)=>n1)    // to find the first value in array
console.log(findValue)

findValue = arr.find((n1) => n1%2==0)    // find the first value that satisfies the given condition
console.log(findValue)

let everyValue = arr.every((n1) => n1%2==0)    // check every element satisfies the given condtion
console.log(everyValue)

let someValue = arr.some((n1) => n1%2==0)    // check any element satisfies the given condtion
console.log(someValue)