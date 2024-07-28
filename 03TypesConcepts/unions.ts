// * Simple union
let id: string | number = 111;
id = '111';

// * Using union type as function parameters
const getVal = (val: number | string) => {
  // Following line will throw an error : Because the number | string is considered a different type
  val.toUpperCase();

  // Solution : Isolate block of codes for specific type. May not be ideal solution but just for demo purpose.
  if (typeof val === 'number') {
    val.toFixed(2);
  }
  if (typeof val === 'string') {
    val.toLowerCase();
  }
};

// * Union of custom object types
type DemoUserType = {
  name: string;
  email: string;
};
type DemoAdminType = {
  userName: string;
  email: string;
};
const createUserWithUnionDemo = (user: DemoUserType | DemoAdminType) => {};

// * Union of literals
const seatAllotment: 'balcony' | 'rear' = 'rear';
