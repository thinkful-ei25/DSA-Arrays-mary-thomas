'use strict';
const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(3);

  // What is the length, capacity and memory address of your array?
  // Answer: length: 1, capacity: 3, ptr: 0

  // Add the following in the main function before printing the array
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // What is the length, capacity and memory address of your array?
  // Explain the result of your program after adding the new lines of code.
  // Answer: length: 6, capacity: 12, ptr: 3. The length of the array is now 6
  // because we pushed 5 new numbers to the array. the capacity is 12 because
  // the capacity above was 3 and we set this._resize((this.length + 1) * Array.SIZE_RATIO)
  // which is (3 + 1) * 3 = 12 to get our capacity of 12. The ptr is set to 3 because
  // after our original arr with length: 1, capacity: 3, ptr: 0, we ran out of capacity and
  // had to copy our array and start with the ptr at 3 which was the next available spot 
  // following our previous array in memory.

  // Add the following in the main function before printing the array
  arr.pop();
  arr.pop();
  arr.pop();
  // What is the length, capacity and address of your array?
  // Explain the result of your program after adding the new lines of code.
  // Answer: length: 3, _capacity: 12, ptr: 3
  // Length went from 6 down to 3 because we executed arr.pop() 3 times thus removing 3 items
  // from our array. the capacity remains unchanged at 12 because we did not exceed capacity.
  // The ptr also remains the same because we did not need to change capacity thus did not have
  // to change ptr location in memory.

  // Print the first item in the array arr.
  // console.log(arr.get(0));

  // Empty the array and add just one item arr.push("tauhida");
  arr.pop();
  arr.pop();
  arr.pop();
  // called arr.pop() 3x to empty array.
  arr.push('tauhida');
  console.log(arr.get(0));
  // Print this one item that you just added. What is the result? Can you explain your result?
  // Answer: NaN. The result was NaN because in the memory class constructor we have the line
  // this.memory = new Float64Array(1024); which only allows us to use 64-bit floating point
  // numbers and not strings like 'tauhida' used in our example.

  console.log(arr);

  // What is the purpose of the _resize() function in your Array class?
  // To allocate enough capacity for our new input if needed. First copies over the new inputs
  // to the new location with the new capacity and then executes memory.free(oldPtr); to free
  // up the memory spots no longer being used for new data.

  // Side note on _resize() naming:
  // It is a naming convention used in javascript for private methods that are just used within
  // the class and are not supposed to be called by users. For example arr.pop(), arr.push() 
  // are available for use but we use the _resize() naming convention to indicate that
  // arr._resize() calls are not intended.
}

// main();


// URLify a string
// A common mistake users make when they type in an URL is to put spaces between words 
// or letters. One solution that developers can use to solve this problem is to replace 
// any spaces with a '%20'. Write a method that takes in a string and replaces all its 
// empty spaces with a '%20'. Your algorithm can only make 1 pass through the string. 
// Examples of input and output for this problem can be:
//    Input: tauhida parveen
//    Output: tauhida%20parveen
//    input: www.thinkful.com /tauh ida parv een
//    output: www.thinkful.com%20/tauh%20ida%20parv%20een

function URLify(string){
  // need to use regex /\s/g to replace all spaces with %20 not just the first.
  return string.replace(/\s/g, '%20');
}
// test URLify on each input
// console.log(URLify('tauhida parveen'));
// console.log(URLify('www.thinkful.com /tauh ida parv een'));

// put inputs into array and use arr.map(URLify)
let arr = ['tauhida parveen', 'www.thinkful.com /tauh ida parv een'];
console.log(arr.map(URLify));
// result: [ 'tauhida%20parveen','www.thinkful.com%20/tauh%20ida%20parv%20een' ]


// Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all 
// numbers less than five from the array. Don't use array's built-in .filter 
// method here; write the algorithm from scratch.

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeLessThan(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeLessThan(testArray));
// result -> [ 6, 7, 8, 9, 10 ]