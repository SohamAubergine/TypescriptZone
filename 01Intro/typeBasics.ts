// * Basic variable declarations with string type
let greetings: string = 'Hello Soham!';

// * Assigining at the time of defining variable -> Infers type automatically from value
let myNumber = 6;

// * Calling one of string methods on greetings
console.log(greetings.toLowerCase());

// * Calling one of number method on myNumn
console.log(myNumber.toFixed(2));

// * Trying to call number method on string variable. This will result in error.
console.log(greetings.toFixed(2));

// * Trying to call string method on number variable. This will result in error.
console.log(myNumber.toLowerCase());

console.log(greetings);

export {};
