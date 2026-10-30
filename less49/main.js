"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  sum += numbers[i];
}

console.log(sum);

console.log(numbers);
console.log(numbers[numbers.length - 1]); // ласт элемент

const numbers2 = new Array(10);

numbers2[0] = 1;

console.log(numbers2);

const types = [
  "Hello",
  10,
  true,
  {
    name: "Alex",
  },
  function () {
    console.log("Hello");
  },
];

console.log(types);

const users = [
  {
    name: "Alex",
    age: 20,
  },
  {
    name: "John",
    age: 34,
  },
  {
    name: "Bob",
    age: 15,
  },
];

function sumAllAges(mass) {
    let sum = 0
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age
  }
  return sum
}

console.log(sumAllAges(users))

console.log(users[2].age);
