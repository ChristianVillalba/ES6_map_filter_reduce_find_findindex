# ES6: map , filter , reduce , find , findindex
Created with [CodeSandbox](https://codesandbox.io/).      
Notes from React module.     
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu      


## Description
This app uses the numbers inside an array: 3, 56, 2, 48, 5       
and prints in the console (DevTools) :
* The double of the numbers in the array
* The numbers that are bigger than 10
* The sum of the values of the array 
* The first number in the array that is bigger than 10
* The index of the first number in the array that is bigger than 10

## Notes
Functions to deal with arrays: Map Filter Reduce Find FindIndex     
In index.js we can find examples of the this functions and their equivalent to a forEach loop if possible (map, filter & reduce)

eg array: ``` var numbers = [3, 56, 2, 48, 5];```

### Map
Create a new array by doing something with each item in an array.  

map: it's more concise than a forEach (for loop)  because it actually returns an output.   
forEach: we have to create a new empty array and then every time we do something with each item inside the array we push to the new array.       
eg: map function
```
function doubledNumbers (x) {
  return x*2;
} 
const newNumbers = numbers.map(doubledNumbers); // save the result in a var
console.log(newNumbers)
```

forEach: we have to create a new empty array and then every time we do something with each item inside the array we push to the new array.

### Filter
Create a new array by keeping the items that return true.
```
const bigThanTen = numbers.filter(function (num) {
  return num > 10;
});
console.log(bigThanTen);
```
### Reduce
Accumulate a value by doing something to each item in an array.
```
const sumNumbers = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
// note: accumulator == var sumNumbers = 0;
```

### Find 
Find the first item that matches from an array.
``` 
const firstBiggerThanTen = numbers.find(function (num) {
  return num > 10;
});
console.log(firstBiggerThanTen);
```
### FindIndex 
Find the index of the first item that matches.
```
const firstBiggerThanTenIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(firstBiggerThanTenIndex);
```

## What I have learned with this project:
* Use of ES6 functions to work with JavaScript arrays
* Adventages of using map , filter & reduce instead of a forEach loop
  * map , filter and reduce return an output
