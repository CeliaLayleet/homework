"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.push(8);

// // const lastNumber = numbers.pop();
// const firstNumber = numbers.shift();

// numbers.unshift(15);

// console.log(firstNumber);
// console.log(numbers.at(-1));

// const reversedNumbers = numbers.toReversed();

// // function reverseAndLog(array) {
// //   console.log([...array].reverse())     Тож реверс копии массива
// // }

// // reverseAndLog(numbers)

// console.log(numbers);
// console.log(reversedNumbers);

let sum = 0;

numbers.forEach(sumNumbers);

console.log(sum);
function sumNumbers (number) {
  sum += number;
}
// своя реализация forEach

// function forEach(array, callBackFunc) {
//   for (let i = 0; i < array.length; i++) {
//     callBackFunc(array[i], i, array);
//   }
// }

// forEach(numbers, sumNumbers);

console.log(sum)