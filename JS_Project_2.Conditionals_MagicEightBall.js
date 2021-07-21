//Task1,2

let userName = '';

if ('Jane') {
    console.log('Hello, Jane!');
} else {
    console.log('Hello!');
}

//Task3,4

let userQuestion = 'Magic Eight Ball';

console.log(`The user asked: ${userQuestion}`);
console.log('The user asked :' + ' ' + userQuestion);

//Task5-9

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
    case 0:
        console.log('It is certain');
        break;
    case 1:
        console.log('It is decidedly so');
        break;
    case 2:
        console.log('Reply hazy try again');
        break;
    case 3:
        console.log('Cannot predict now');
        break;
    case 4:
        console.log('Do not count on it');
        break;
    case 5:
        console.log('My sources say no');
        break;
    case 6:
        console.log('Outlook not so good');
        break;
    case 7:
        console.log('Signs point to yes');
        break;
    case 8:
        console.log('It is 8');
        break;
}
if (randomNumber === 3) {
    console.log('Hello Hello');
} else if (randomNumber === 2) {
    console.log('Hello');
} else {
    console.log('Hi');
}

console.log(eightBall);

//test

let helloNumber = Math.floor(Math.random() * 3);
let hello = '';

if (helloNumber === 3) {
    console.log('Hello Hello');
} else if (helloNumber === 2) {
    console.log('Hello');
} else {
    console.log('Hi');
}