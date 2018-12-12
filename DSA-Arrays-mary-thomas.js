'use strict';
const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(3);
  console.log(arr);
}

main();

// What is the length, capacity and memory address of your array?

// Add the following in the main function before printing the array
