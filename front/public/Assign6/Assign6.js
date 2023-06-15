//1
function add(arr, element){

    arr.push(element);
    return arr;
}
const myArray = [1, 2, 3];
const newArray = add(myArray, 4);
console.log(newArray);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);
//2
function remove(arr){
    arr.pop();
    return arr;
}
let mynums = [1, 2, 3, 4, 5, 6, 7, 8];
let myresult = remove(mynums);
console.log(myresult);

let num=[1,2,3,4,5,6];
num.pop();
console.log(num);
//3
function combine(arr1,arr2){
    return arr1.concat(arr2);
}

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linuss"];
const myChildren = combine(myGirls,myBoys);
console.log(myChildren);
//4

function findElementIndex(arr, element) {
    return arr.indexOf(element);
}
const value = [10, 20, 30, 40];
const index = findElementIndex(value, 30);
console.log(index);

//5
function extractArrayPortion(arr, startIndex, endIndex) {
    return arr.slice(startIndex, endIndex);
}
const val = [1, 2, 3, 4, 5, 6];
const portion = extractArrayPortion(val, 2, 5);
console.log("Extracted Portion:", portion);
//6
function convertToUppercase(str) {
    return str.toUpperCase();
}
  
const myString = "hello, world";
const uppercaseString = convertToUppercase(myString);
console.log(uppercaseString);
//7
function convertToLowerCase(str) {
    return str.toLowerCase();
}
const lower = "Hello, World";
const lowercaseString = convertToLowerCase(lower);
console.log(lowercaseString);
//8
function splitStringToArray(str, separator) {
    return str.split(separator);
}
const split = "Hello, World!";
const separator = ", ";
const substrings = splitStringToArray(split, separator);
console.log(substrings);
//9
function getCharacterAtIndex(str, index) {
    return str.charAt(index);
}
const char = "Hello, World!";
const character = getCharacterAtIndex(char, 7);
console.log(character);
//10
function extractSubstring(str, startIndex, endIndex) {
    return str.substring(startIndex, endIndex);
}
const extract = "Hello, World!";
const substring = extractSubstring(extract, 7, 12);
console.log(substring);
//11
function doubleElements(array) {
    return array.map(element => element * 2);
}
const array = [1, 2, 3, 4, 5];
const doubledArray = doubleElements(array);
console.log(doubledArray);
//12
function RemoveEvenNumbers(even){
    return even.filter(element => element % 2 !== 0);
}
const even = [1, 2, 3, 4, 5, 6];
const result = RemoveEvenNumbers(even);
console.log(result);
//13
function logArrayElement(log){
    return log.forEach(element => {console.log(element)});
}
const log = ["Error", "Warning"];
logArrayElement(log);
