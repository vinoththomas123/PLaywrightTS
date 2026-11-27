import { count } from "node:console";

let str = "malayalam";


//reverse the string without using reverse method
let reversed: string = "";
let len = str.length - 1;

console.log(len)
for (let i = len; i >= 0; i--) {
    reversed = reversed + str[i];
    console.log(reversed);

}

console.log(reversed);

if (reversed == str)
    console.log(str + " is Polyndrome");
else
    console.log(str + " is not Polyndrome");


// Find duplicate characters/numbers
let arr = ['a', 'n', 'n', 'x', 'y', 'y', 't'];

for (let item of arr) {
    if (arr.indexOf(item) != arr.lastIndexOf(item)) {
        console.log("Repeated string: " + item);
    }
    else
        console.log("Non Repeated string: " + item);
}

let numArr = [1, 2, 3, 1, 3, 4, 5, 5]
for (let item of numArr) {
    if (numArr.indexOf(item) != numArr.lastIndexOf(item)) {
        console.log("Repeated number: " + item);
    }
    else
        console.log("Non Repeated number: " + item);
}

// Find Missing Numbers in an Array    
const nums = [1, 2, 4, 6, 8, 9, 11];

let newNum = [];
for (let i = 0; i <= 11; i++) {

    if (!nums.includes(i)) {
        console.log(i + " is missing");
        newNum.push(i);
    }

}
console.log(newNum);


// Another way to find it

let numbers = [1, 2, 3, 5];

let sum = numbers.reduce((n1, n2) => n1 + n2);
console.log(sum);

let n = 5; //last digit in array

let expected = (n * (n + 1)) / 2;

console.log(expected);

console.log("Missing number is: " + (expected - sum));

//Count occurrences of each character

str = "bbbcccddddeff";

let map = new Map<string, number>();

for (let char of str) {
    let count = map.get(char)
    if (count === undefined)
        count = 0;
    map.set(char, count + 1);
}
console.log(map);


//Sort an array without using sort()

let unsorted = [30, 50, 20, 10, 70, 60];

for (let i = 0; i < unsorted.length; i++) {
    for (let j = 0; j < unsorted.length - 1 - i; j++) {
        if (unsorted[j] > unsorted[j + 1]) {
            let temp = unsorted[j];
            unsorted[j] = unsorted[j + 1]
            unsorted[j + 1] = temp;
        }

    }



}
console.log(unsorted)

//  Find common elements between two arrays

let array1 = ["a", "b", "c", "d"]
let array2 = ["c", "b", "e", "d"];

for (let item of array1) {
    if (array2.includes(item))
        console.log("Common char: " + item)
}


// Check whether two strings are anagrams
// Two strings are anagrams if they contain the same characters with the same frequencies.
let str1 = "listen";
let str2 = "silent";

let map1 = new Map<String, number>();

for (let item of str1) {
    let count = map1.get(item);
    if (count === undefined)
        count = 0;
    map1.set(item, count + 1)

}

for (let item of str2) {
    let count = map1.get(item);
    if (count === undefined)
        count = 0;
    map1.set(item, count - 1)
}
console.log(map1.values());

let anagram = true;
for (let value of map1.values()) {
    console.log(value)

    if (value !== 0) {
        anagram = false;
        break;
    }
}
console.log(anagram)

// Flatten a nested array
let nestedArray = [1, [2, [3, 4]], 5];
let flatArray: number[] = [];

function flatten(array: any[]): void {
    for (let item of array) {
        if (Array.isArray(item)) {
            flatten(item);
        } else {
            flatArray.push(item);
        }
    }
}

flatten(nestedArray);

console.log(flatArray);

// Using a object for getting occurrences
str = "bbccceejjjddfhhht";

let obj: { [key: string]: number } = {};

for (let item of str) {
    obj[item] = (obj[item] || 0) + 1;
}

console.log(obj)

let entries = Object.entries(obj);

for (let [key, value] of entries){
    
    if (value===1){
        console.log (key , value);
    }
}

let json = {
    emp: "John",
    age: 25,
    code: 1005,
    phone: 8855997722
}

console.log(json.emp);
console.log(json["phone"]);






