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





/* - - - - - - - - - - - - - - - - - - */
/* - - - - - URLIFY A STRING - - - - - */
/* - - - - - - - - - - - - - - - - - - */

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
let urlTest = 'tauhida parveen';
let urlTest2 = 'www.thinkful.com /tauh ida parv een';
// console.log(URLify(urlTest));
// console.log(URLify(urlTest2));

// put inputs into array and use arr.map(URLify)
let arr = ['tauhida parveen', 'www.thinkful.com /tauh ida parv een'];
// console.log(arr.map(URLify));
// result: [ 'tauhida%20parveen','www.thinkful.com%20/tauh%20ida%20parv%20een' ]




/* - - - - - - - - - - - - - - - - - - - -*/
/* - - - - - FILTERING AN ARRAY - - - - - */
/* - - - - - - - - - - - - - - - - - - - -*/

// Imagine you have an array of numbers. Write an algorithm to remove all 
// numbers less than five from the array. Don't use array's built-in .filter 
// method here; write the algorithm from scratch.

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let testArray2 = [10, 2, 5, 7, 3, 0, 15];

function removeLessThan(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// console.log(removeLessThan(testArray));
// testArray -> [ 5, 6, 7, 8, 9, 10 ]
// console.log(removeLessThan(testArray2));
// testArray2 -> [ 10, 5, 7, 15 ]




/* - - - - - - - - - - - - - - - - - - - - -*/
/* - - - - - MAX SUM IN THE ARRAY - - - - - */
/* - - - - - - - - - - - - - - - - - - - - -*/

// You are given an array containing positive and negative integers. Write an 
// algorithm which will find the largest sum in a continuous sequence.
//    Input: [ 4, 6, -3, 5, -2, 1 ]
//    Output: 12

let lcsArray = [ 4, 6, -3, 5, -2, 1 ];
let lcsArray2 = [-1, 4, 3, -1, -5, -3, 10, 11]; // made up test case
// function largeContinuousSum(arr) {
//   let sum = 0;
//   let contSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > contSum) {
//       contSum = sum;
//     }
//   }
//   return contSum;
// }

function largeContinuousSum(arr) {
  let maxToHere = 0;
  let maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    maxToHere = Math.max(0, maxToHere + item);
    maxSoFar = Math.max(maxSoFar, maxToHere);
    console.log(`Item: ${item} ::-:: MaxToHere: ${maxToHere} ::-:: MaxSoFar: ${maxSoFar}`);
  }
  return maxSoFar;
}
// console.log(largeContinuousSum(lcsArray)); //  12
// console.log(largeContinuousSum(lcsArray2)); // 21



/* - - - - - - - - - - - - - - - - -*/
/* - - - - - MERGE ARRAYS - - - - - */
/* - - - - - - - - - - - - - - - - -*/

// Imagine you have two arrays which have already been sorted. Write an algorithm to 
// merge the two arrays into a single array, which should also be sorted.
//    Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//    Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

let mergeArray1 = [1, 3, 6, 8, 11];
let mergeArray2 = [2, 3, 5, 8, 9, 10];

function mergeArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i++]);
    } else {
      mergedArray.push(arr2[j++]);
    }
  }

  if (j < arr2.length) {
    i = j;
    arr1 = arr2;
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i++]);
  }
  return mergedArray;
}

// console.log(mergeArrays(mergeArray1, mergeArray2));




/* - - - - - - - - - - - - - - - - - - - */
/* - - - - - REMOVE CHARACTERS - - - - - */
/* - - - - - - - - - - - - - - - - - - - */

// Write an algorithm that deletes given characters from a string. For example, 
// given a string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to be 
// removed are "aeiou", the algorithm should transform the original string to 
// "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.
//    Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
//    Output: 'Bttl f th Vwls: Hw vs. Grzny'

let removeCharString = 'Battle of the Vowels: Hawaii vs. Grozny';
let removeChars = 'aeiou';

// function removeChar(removeChars, str) {
//   let remove = new RegExp('ReGeX' + removeChars + 'ReGeX', 'gi');
//   return str.replace(remove, '');
// }
// console.log(removeChar(removeChars, removeCharString));

function removeChar(removeChars, str) {
  let newStr = '';
  let count = 0;
  console.log('removeChars length', removeChars.length);
  console.log('str length', str.length);
  // console.log('str char 0', str.charAt(0));
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < removeChars.length; j++) {
      // console.log('i1', str.charAt(i));
      // console.log('j1', removeChars.charAt(j));
      if (str.charAt(i) === removeChars.charAt(j)) {
        // console.log('str', str.charAt(i), 'remove', removeChars.charAt(j));
        newStr += '';
        // console.log('i', str.charAt(i));
        // console.log('j', removeChars.charAt(j));
        // newStr += str.charAt(i);
      } else {
        console.log(count);
        newStr += str.charAt(i);
        count = 0;
      }
    }
  }
  return newStr;
}
// removeChar(removeChars, removeCharString);
console.log(removeChar(removeChars, removeCharString));





/* - - - - - - - - - - - - - - -*/
/* - - - - - PRODUCTS - - - - - */
/* - - - - - - - - - - - - - - -*/

// Given an array of numbers, write an algorithm to find out the products of every number,
// except the one at that index.
//    Input:[1, 3, 9, 4]
//    Output:[108, 36, 12, 27]

function products(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    output.push(product);
  }
  return output;
}

let productsArray = [1, 3, 9, 4];
// console.log(products(productsArray));



/* - - - - - - - - - - - - - - -*/
/* - - - - - 2D ARRAY - - - - - */
/* - - - - - - - - - - - - - - -*/

// Write an algorithm which searches through a 2D array, and whenever it finds a zero 
// should set the entire row and column to zero.
//    input:
//    [[1,0,1,1,0],
//    [0,1,1,1,0],
//    [1,1,1,1,1],
//    [1,0,1,1,1],
//    [1,1,1,1,1]];
//    output:
//    [[0,0,0,0,0],
//    [0,0,0,0,0],
//    [0,0,1,1,0],
//    [0,0,0,0,0],
//    [0,0,1,1,0]];






/* - - - - - - - - - - - - - - - - - - */
/* - - - - - STRING ROTATION - - - - - */
/* - - - - - - - - - - - - - - - - - - */

// Given two strings, str1 and str2, write a program that checks if str2 
// is a rotation of str1.
//    Input: amazon, azonma
//    Output: False
//    Input: amazon, azonam
//    Output: true

function stringRotation(str1, str2) {
  return (str2 + str2).indexOf(str1) !== -1;
}

// let str1 = 'amazon';
// let str2 = 'azonma';
let str1 = 'amazon';
let str2 = 'azonam';
// console.log(stringRotation(str1, str2));