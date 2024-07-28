const user = {
  name: 'Soham',
  email: 'soham@sp.com',
  isActive: true,
};

// * Sample example function, with accepting object as parameter.
const createUser = (user: { name: string; isPaid: boolean }) => {};

// * Sample example function returning object
const createCOurse = (): { name: string; price: number } => {
  return {
    name: 'Fullstack Saga',
    price: 111,
  };
};

/* Example of odd behaviour of passing objects to function 
- Consider createUser function defined above. It has arguement with type of user object. 
- Case 1 : Notice in below lines, if we try to pass an object literal and try to add new field in object, TS compiler will throw an error.
- Case 1 : For same function, if we store the object into a new variabl, TS compiler does not throw an error!
*/
// * Case 1 - Will throw an error.
createUser({ name: 'Soham', isPaid: true, email: 'a@a.com' });

// * Case 2 - No error!
let userObj = {
  name: 'Soham',
  isPaid: true,
  email: 'a@a.com',
};
createUser(userObj);

// * Type alias example
type User = {
  name: string;
  email: string;
  isActive: boolean;
};
const createUserWithAlias = (user: User) => {};

// * Example of readonly keyword & optional properties(? symbol)
type UserRecord = {
  readonly _id: string;
  name: string;
  email: string;
  creditCardNo?: string;
};
// If we do not pass credCardNo, it is considered as valid case as it is marked as an optional property
const userObj2: UserRecord = {
  _id: '111',
  name: 'Soham',
  email: 'a@a.com',
};
// For following line, TS compiler will throw an error.
userObj2._id = '444';

// * Combining multiple types - using & operator
type cardNumber = {
  cardNumber: string;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
