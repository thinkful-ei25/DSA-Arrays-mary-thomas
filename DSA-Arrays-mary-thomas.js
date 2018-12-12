'use strict';
const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(3);

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
}

main();

// What is the length, capacity and memory address of your array?
// length: 1, capacity: 3, ptr: 0

// Add the following in the main function before printing the array

// NaN. float is for decimals. this line --> this.memory = new Float64Array(1024);