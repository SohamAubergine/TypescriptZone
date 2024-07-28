// * Example of basic function definitions in TS

function addTwo(num: number): number {
  // * return "hello"; -> This line will result in an error.
  return num + 2;
}
function toUpperCase(str: string) {
  return str.toUpperCase();
}
function signUpUser(name: string, email: string, isPaid: boolean = false) {}
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

const getHello = (s: string): string => {
  return '';
};

// * Using function with type annotations in
const heroes = ['ironman', 'dumbledore', 'snap'];
heroes.map((hero): string => {
  return `Hero is ${hero}`;
});

// * Example of void return type
const consoleError = (errmsg: string): void => {
  console.log(errmsg);
};

// * Example of never return type
const handleError = (errmsg: string): never => {
  throw new Error(errmsg);
};

toUpperCase('someStr');
signUpUser('soham', 'a@a.com', true);
loginUser('soham', 'a@a.com');

const myVal = addTwo(9);
