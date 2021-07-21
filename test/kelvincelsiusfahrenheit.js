//kelvin, and set it equal to 293.//
let kelvin = 0;
console.log(kelvin);
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.//
let celsius = kelvin - 273;
console.log(celsius);
//Fahrenheit = Celsius * (9/5) + 32//
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

//convert from Celsius to Fahrenheit, you often get a decimal number.built-in Math object to round down the Fahrenheit temperature//
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

let TEMPERATURE = fahrenheit;
console.log('The temperature is' + ' ' + TEMPERATURE + ' ' + 'degrees Fahrenheit.');
console.log(`The temperature is ${TEMPERATURE} 'degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(newton);

console.log(123) //number
console.log("testtest") //string
console.log(false) //boolean

//consoloe.log// test

/* */ //comment