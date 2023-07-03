const calculateSquare = (number) => {
    return number ** 2;
}
console.log(calculateSquare(5)); 
console.log(calculateSquare(8)); 
console.log(calculateSquare(-3)); 
//2
function countWords(string) {
    const words = [...string.split(' ')];
    return words.length;
}
const sentence = "These are the best apples";
const wordCount = countWords(sentence);
console.log(wordCount);
//3
class person{
    constructor(name, age, sex){
        this.name=name;
        this.age=age;
        this.sex=sex;
    }
}
let person1 = new person("venky", 22, "male");
console.log(person1.name);
console.log(person1.age);
console.log(person1.sex);

