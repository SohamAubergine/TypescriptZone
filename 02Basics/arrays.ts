// * Simple array
const myArray: number[] = [1, 2, 3, 4];

// * Array of objects
type UserTyp = {
  name: string;
  email: string;
};
let users: UserTyp[] = [];
users.push({
  name: 'Soham',
  email: 'a@a.com',
});

// * Array of arrays
const my2DArray: number[][] = [
  [1, 2, 3],
  [3, 4, 5],
];
