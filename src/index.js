var numbers = [3, 56, 2, 48, 5];

// map/filter/reduce are more concise than a forEach (for loop)
// because it actually returns an output.

// Map -Create a new array by doing something with each item in an array.
function doubledNumbers(x) {
  return x * 2;
} // save the result in a var
const newNumbers = numbers.map(doubledNumbers);
// for forEach loop
// var newNumbers = [];
// function doubledNumbers(x) {
//   newNumbers.push(x*2);
// }
// numbers.forEach(doubledNumbers)
console.log(newNumbers);

// Filter - Create a new array by keeping the items that return true.
const biggerThanTen = numbers.filter(function (num) {
  return num > 10;
});
//  forEach loop
// var biggerThanTen = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     biggerThanTen.push(num);
//   }
// });
console.log(biggerThanTen);

//Reduce - Accumulate a value by doing something to each item in an array.
const sumNumbers = numbers.reduce(function (accumulator, currentNumber) {
  //accumulator == var sumNumbers = 0;
  return accumulator + currentNumber;
});
// forEach loop
// var sumNumbers = 0;    ==accumulator
// numbers.forEach(function (currentNumber) {
//   sumNumbers += currentNumber;
// });
console.log(sumNumbers);

//Find - find the first item that matches from an array.
const firstBiggerThanTen = numbers.find(function (num) {
  return num > 10;
});
console.log(firstBiggerThanTen);
// It doesn;t loop through all the array, it stops as soon as it get the first match

//FindIndex - find the index of the first item that matches.
const firstBiggerThanTenIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(firstBiggerThanTenIndex);
// Similar to filter but
// insted of the value in the array, returns the index
