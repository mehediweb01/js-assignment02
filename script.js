//01 no.
function celsiusToFahrenheit(celsius) {
    return (9/5) * celsius + 32;
}
console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(25));


//02 no.
function isEven(num) {
    return num % 2 === 0;
  }
console.log(isEven(4));
console.log(isEven(7));


//03 no.
function sum(a,b){
    return a + b;
}
console.log(sum(3,4));
console.log(sum(10,20));


//04 no.
function findSmallestNum(arr) {
    return Math.min(...arr);
}
console.log(findSmallestNum([3, 5, 1, 9]));
console.log(findSmallestNum([-1, -5, 0, 10]));


//05 no.
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    return Array.from(str).filter((vowel) => vowels.includes(vowel)).length;
}

console.log(countVowels("hello world"));
console.log(countVowels("Javascript")); 


//06 no.
function getFirstElement(arr) {
    return arr.at(0);
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"])); 


//07 no.
function isArrayEmpty(arr) {
    return arr.length === 0;
}

console.log(isArrayEmpty([])); 
console.log(isArrayEmpty([1, 2, 3])); 


//08 no.
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return factorialize(num - 1) * num;
}

console.log(factorialize(5)); 
console.log(factorialize(7)); 


//09 no.
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
console.log(reverseString("world")); 


//10 no.
function toLowerCase(str) {
    return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); 
console.log(toLowerCase("JavaScript"));


//11 no.
function stringLength(str) {
    return str.length;
}

console.log(stringLength("hello"));
console.log(stringLength("world"));


//12 no.
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
console.log(mergeArrays(["a", "b"], ["c", "d"])); 


//13 no.
function getLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"])); 


//14 no.
function getFirstCharacter(str) {
    return str.charAt(0);
}

console.log(getFirstCharacter("hello")); 
console.log(getFirstCharacter("world"));


//15 no.
function sumArray(arr) {
   return arr.reduce((a,b) => a+b );
}

console.log(sumArray([1, 2, 3, 4])); 
console.log(sumArray([-1, -2, -3, -4])); 
console.log(sumArray([1.5, 2.5, 3.5])); 