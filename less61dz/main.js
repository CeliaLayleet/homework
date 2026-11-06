"use strict";

//  1

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString();
}

// 2

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

const x = [1, 2, -2, 3, -4];

function maps(x) {
  return x.map(number => number * 2);
}

console.log(maps(x));

// 3

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

function invert(array) {
  return array.map(number => number * -1);
}

console.log(invert(x));

// 4

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

let averageRating = 0;

function getGrade(s1, s2, s3) {
  averageRating = (s1 + s2 + s3) / 3;
  if (averageRating >= 90 && averageRating <= 100) {
    return "A";
  } else if (averageRating >= 80 && averageRating < 90) {
    return "B";
  } else if (averageRating >= 70 && averageRating < 80) {
    return "C";
  } else if (averageRating >= 60 && averageRating < 70) {
    return "D";
  } else if (averageRating > 0 && averageRating < 60) {
    return "F";
  } else {
    return "Введите корректную оценку";
  }
}

console.log(getGrade(100, 90, 90));

// 5

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  if (h < 0 || m < 0 || s < 0) {
    return "не бывает такого";
  } else if (h > 23) {
    return "пиши часы в пределах суток";
  } else if (m > 59 || s > 59) {
    return "!@#$%^&*()_+";
  }
  return h * 3600000 + m * 60000 + s * 1000;
}

console.log(past(2, 16, 57));

// 6

// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  arr.forEach(number => {
    if (number > 0) {
      sum += number;
    }
  });
  return sum;
}

console.log(positiveSum(x));

// 7

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input.length === 0) {
    return [];
  }
  let count = 0;
  let sum = 0;
  input.forEach(number => {
    if (number > 0) {
      count++;
    } else if (number < 0) {
      sum += number;
    }
  });

  return [count, sum];
}

console.log(countPositivesSumNegatives(x));

// 8

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(sheep) {
  let sum = 0;
  sheep.forEach(function (element) {
    if (element === true) {
      sum++;
    } else if (element === null) {
      return "Дай нормальный массив";
    }
  });
  return sum;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ]),
);

// 9

// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.split(" ").join("");
}
console.log(noSpace("h h hh hhhh"));

// 10

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let productOfNumbers = 1;
  x.forEach(number => {
    productOfNumbers = productOfNumbers * number;
  });
  return productOfNumbers;
}

console.log(grow(x));
