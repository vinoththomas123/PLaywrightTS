let arr:number[] = [1,2,3,4,5];
arr.push(6);
console.log(arr)
let array1: number[]=[];


array1.push(10);
array1.push(20);
array1.push(30);
array1.unshift(1);

array1.pop();
array1.shift();
console.log(array1)


for (let i =0; i< arr.length; i++){
    // console.log(arr[i]);
}


for (let item in arr){
    // console.log(arr[item]);
}

for (let item of arr){
    // console.log(item);

    if (item % 2 == 0)
        console.log(item);
}


let filteredArray = arr.filter((item)=>item % 2 == 0)
console.log(filteredArray);

let findArray = arr.find((item)=>item % 2 == 0)
console.log(findArray);


let reduceArray = arr.reduce((num1, num2)=>num1*num2, 10)
console.log(reduceArray);

let mapArray = arr.map((num1)=>num1*2)
console.log(mapArray);

let slicedArray = arr.slice(2,4)
console.log(slicedArray);

let splicedArray = arr.splice(1,1)
console.log(splicedArray);

console.log(arr);

let reversed = arr.reverse();

console.log(reversed);

arr.push(1);
arr.push(3)
console.log(arr.indexOf(3));

console.log(arr.lastIndexOf(3));

console.log("For Each");
arr.forEach((item)=>{
   console.log(item) 
})





//Check the given string is anagram

let str1 = 'listen';
let str2 = 'silentr';

let map = new Map<string, number>();

for (let item of str1){
    
    let count = map.get(item);
    if (count===undefined) 
        count = 0;

    map.set(item, count+1);

}

for (let item of str2){
    
    let count = map.get(item);
    if (count===undefined) 
        count = 0;

    map.set(item, count-1);

}

let anagram = true;
for (let value of map.values()){
    if (value!==0) {
        anagram = false
        break;
    }
}
console.log(anagram);

//Flatten array;

let nested = [1, [2,3], 4, [6, [8], 7]];
let flattened: number[] = [];
function flattenArray (arr: any[]){

    for (let item of arr){
        if (Array.isArray(item)){
            flattenArray(item);
        }
        else{
            flattened.push(item);
        }
    }

}

flattenArray(nested);

console.log(flattened)

//occurence of each char in a string

let str = "aaabbcccedddffff";

map.clear();

for (let item of str){
    let count = map.get(item);
    if (count  === undefined){
        count = 0;
    }
    map.set(item, count+1);
}

console.log(map.entries());



//first non-repeating char in the string
str = "aaabbcccedddffff";

for (let item of str){
    if (str.indexOf(item) === str.lastIndexOf(item)){
        console.log(item);
        break;
    }
}

//Alternate way
str = "aaabbcccedddffff";

for (let item of str){
    let regex = new RegExp(item, 'g');
    let matched = str.match(regex);
    console.log(item + ":" + matched?.length);
    if (matched?.length === 1){
        console.log(matched);
    }
}
