//check string is polyndrome
let a = "malayalam";
let arr = getArray(a)
// let b = a.reverse();
// console.log("Reversed string: "+ b); //error as it is still a string

if (arr==arr.reverse()){
    console.log("Polyndrome")
}
else{
    console.log("Not Polyndrome")
}

function getArray(a) {
    let arr = new Array();
    for (let item of a) {
        arr.push(item);
    }
    return arr;
}

// reverse string without using function
let str1 = "malayalam";
let b = getArray(str1);
let len = b.length - 1;

let c = new Array()
console.log(len);

for (let i=len;i>=0;i--){
    c.push(b[i]);

}
console.log("New c: "+c);

//Find the duplicate characters
//===========================================
let chars = ["a", "z", "e", "g", "a", "z"];

for(item of chars.sort()){
    let firstIndex = chars.indexOf(item);
    let lastIndex = chars.lastIndexOf(item);

    if (firstIndex!=lastIndex)
        console.log(item + " is duplicate")
    else
        console.log(item + " is not duplicate")

}


//Problem: Write a JavaScript/TypeScript program to find the largest and second-largest distinct numbers in an array without using the built-in sort() method.

let numbers = [110, 115, 35, 67, 98, 23];
let large=1;
let secLarge = 0;

for (let item of numbers){
   if (item>large){
    large = item
   }
}

console.log("Large"+large)
let largeNumberIndex = numbers.indexOf(large)
numbers.splice(largeNumberIndex,1);
large=1;
for (let item of numbers){
   if (item>large){
    large = item
   }
}
console.log("Second Large: "+large)

//Alternate way
numbers = [110, 115, 35, 67, 98, 23];
numbers.sort();     //sort works only for alphabets so we are using arrow function in toSorted ()
// let sortedNumbers = numbers.toSorted((a)=>a);    sorts in descending order so using a-b 
let sortedNumbers = numbers.toSorted((a,  b)=>a - b); 
console.log("Largest: "+ sortedNumbers[sortedNumbers.length-1])
console.log("Second Largest: " + sortedNumbers[sortedNumbers.length-2])


//3. Find the first non-repeating character in a string.
let str = "abcabcecdafdfiihk";
console.log(str)

for (item of str){
    if (str.indexOf(item) == str.lastIndexOf(item)){
        console.log("Non Repeating characters in a String: "+ item)
    }
}

//Count the frequency of each character in a string.
str = "abcabcecdafdfiihk";
let count = 1;
let matchResult;
let map = new Map();
let occurrences=0;

for (item of str){
    let regex = new RegExp(item, "g");
    // using Regex
    matchResult = str.match(regex);
    console.log(matchResult)
    occurrences = matchResult.length
    console.log(occurrences);
    map.set(item, occurrences);
    console.log("Key: "+ item + " - " + map.get(item));
    count = 1
}

let text = "Please locate where 'locate' occurs! if located then print all 'locate'";
let index = text.search("locate");  // this will not work out since it will find the starting index
console.log(index)
let searchAll = text.search("/locate/g");
console.log(searchAll)      //not works out reesult is -1


index = text.match("locate");
console.log(index)      //7  - the index where the first locate starts
searchAll = text.match("/locate/g");    //null
console.log(searchAll)  //not works - null

let regEx = new RegExp("locate", "g");
searchAll = text.match(regEx);
console.log(searchAll.length)   //returns 4 - this is the correct answer


//Find the missing number from 1 to n
function findMissingNumber(numbers, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((sum, number) => sum + number, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3

// Alternate solution - Find the missing number from 1 to n
// n*(n+1) / 2 produces the sum of n numbers
// need to get the total of given array 
// if total and sum does not match then sum - total gives the missing number

let series = [1,2,3,5]
let n = series[series.length-1];   //5 - fetching the last number from array: => n=5
let sum = n*(n+1) / 2;            //15
let total = 0;


for ( let i=0; i<series.length; i++ ){
    total = total + series[i];
}
if (sum != total){
    let missingNo = sum - total;
    console.log("Missing Number is: " + missingNo);
}
