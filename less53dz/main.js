"use strict";

// 1

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// 2

function getUserAverageAge(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
  }
  const averageUserAge = sum / users.length;
  return averageUserAge;
}

console.log(getUserAverageAge(users));

// 3

function getAllAdmins(users) {
  const admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
      admins.push(users[i]);
    }
  }
  return admins;
}

console.log(getAllAdmins(users));

// 4

function first(arr, n) {
  if (n === 0) {
    return [];
  } else if (n === undefined) {
    return [arr[0]];
  } else if (n > arr.length) {
    return console.error(
      `Число не может быть больше длины массива: ${Array.length}`,
    );
  }

  const firstElements = [];

  for (let i = 0; i < n; i++) {
    firstElements.push(arr[i]);
  }
  return firstElements;
}

console.log(first(users, 0));
console.log(first(users));
console.log(first(users, 3));
