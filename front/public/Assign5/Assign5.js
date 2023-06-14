// 1st
function isEven(num){
    if(num%2==0){
        return true;
    }else
        return false;
}
console.log(isEven(7));
document.getElementById("1").innerHTML=isEven(7);
// 2nd
var students=[{
    Name:"Kiran",
    Age:20
},{
    Name:"Raj",
    Age:21
}];
let names = "";
for(var i=0;i<students.length;i++)
{
    let x = students[i].Name;
    console.log(x);
    names = names + " " + x;
}
document.getElementById("2").innerHTML= names;
//3
var students=[{
    Name:"Kiran",
    gmail:"kiran@gmail.com"
},{
    Name:"Raj",
    gmail:"raj@gmail.com"
}];
let gmail = "";
for(var i=0;i<students.length;i++)
{
    let x = students[i].gmail;
    console.log(x);
    gmail = gmail + " " + x;
}
document.getElementById("3").innerHTML= gmail;
//4
function isPositive(num){
if(num==0) {return true;
}else
return false;
}
let x=isPositive(-2);
console.log(x);
document.getElementById("4").innerHTML=x;
//5
function grades(grade){
    if(grade>=60){
        return "pass";
    }else
        return "fail";
}
let y=grades(85);
console.log(y);
document.getElementById("5").innerHTML=y;
//6
function isPalindrome(word){
    for(i=0;i<word.length;i++){
        if(word[i]!== word[word.length-1-i]){
            return false;
        }
        return true;
    }
}
const result=isPalindrome("racecar");
console.log(result);
document.getElementById("6").innerHTML=result;

// function isPrime(num){
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// const result1=isPrime(11);
// console.log(result1);
// document.getElementById(" ").innerHTML=result1;

//7
const numbers=[1, 2, 3, 4, 5, 6];
let sum =0;
for(i=0;i<numbers.length;i++){
    sum+=numbers[i];
}
console.log(sum);
document.getElementById("7").innerHTML=sum;
//8

var name="Alice";
if (name === "Alice") {
    console.log("Hello, Alice!");
  } else {
    console.log("Hello, stranger!");
}
//9
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "1984", author: "George Orwell" }
];
for(i=0;i<books.length;i++){
    if(books[i].title==="The Great Gatsby"){
        console.log(books[i].author);
    }
}
//10
function calculateArea(length, width) {
    return length * width;
}
const area = calculateArea(4, 5);
console.log(area);
