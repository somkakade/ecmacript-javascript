// const arr = [1, 5, 6, 4, 23, 4, 5, 2, 4];

// const newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   newArray.push(arr[i] * 2);
// }
// // console.log(arr);
// console.log(newArray);

// Map

// const newArray = arr.map((number) => {
//   return number * 2;
// });

// console.log(arr);
// console.log(newArray);

// const newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 5) {
//     newArray.push(arr[i]);
//   }
// }
// console.log(arr);
// console.log(newArray);

// Filter

// const arr = [1, 5, 6, 4, 23, 4, 5, 2, 4];

// let newArray = arr.filter((number) => {
//   return number < 5;
// });
// console.log(arr);
// console.log(newArray);

// const arr = [1, 5, 6, 4, 23, 4, 5, 2, 4];

// let newArray = arr.filter((number) => {
//   return number !== 5;
// });
// console.log(arr);
// console.log(newArray);

// const arr = [1, 5, 6, 4, 23, 4, 5, 2, 4];

// const newArray = [];

// for (let i = 0; i < arr.length; i++) {
//   newArray.push(`Number: ${arr[i]}`);
// }
// console.log(arr);
// console.log(newArray);

const users = [
  { id: 1, name: "amol", age: 24 },
  { id: 2, name: "onkar", age: 26 },
  { id: 3, name: "ram", age: 21 },
];

const removeUser = (name) => {
  const newUserArray = users.filter((user) => {
    return user.name !== name;
  });
  return newUserArray;
};
console.log(removeUser("amol"));
