"use strict";

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

user.mod = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);


// for (const key of keys) {
//   console.log(user[key]);
// };
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
};

// const entries = Object.entries(user);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }