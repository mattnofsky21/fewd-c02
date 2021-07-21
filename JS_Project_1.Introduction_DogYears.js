//equal to your age as a number
let myAge = 13;

//the value saved to this variable will change
let earlyYears = 2;

earlyYears = earlyYears * 10.5;
console.log(earlyYears);

let laterYears = myAge - 2;
laterYears *= 4;
console.log(laterYears);

console.log(earlyYears + laterYears);

let myAgeInDogYears = (earlyYears + laterYears);
console.log(myAgeInDogYears);

// Task 8 string method 

let myName = 'Yugi';
console.log(myName);
console.log('yugi'.toLowerCase());

//My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.

console.log(`My name is ${myName}. I am ${myAgeInDogYears}  years old in dog years.`);