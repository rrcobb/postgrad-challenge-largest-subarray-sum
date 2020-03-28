// Given an array of integers find a sequence with the largest sum.

// This file is run 9 times because of the tests

// Assumptions:
// array.length < 0
// array[i] is an integer
// MISUNDERSTOOD QUESTION: No need to sort array
function largestSubarraySum(array){
  // // Sum initialized at first item in array
  // let sum = array[0];

  // Initialize sum at 0
  let sum = 0;
  let largestSubarray = [];

  console.log("array = ", array);

  // If array has 1 item, just return the sum
  if(array.length === 1){
    largestSubarray.push(array[0]);
    // return sum;
    sum += array[0];
    return sum;
  } 

  // If array has 2 items
  // MISUNDERSTOOD QUESTION: subArray can have 1 item, so skip this else statement
  // else if(array.length === 2){
  //   largestSubarray.push(array[0]);
  //   largestSubarray.push(array[1]);

  //   sum += array[0];
  //   sum += array[1];
  // } 

  // Else there are 2 or more numbers in the array
  else {
    let innerSum;

    for(let index in array){
      let num = array[index];
      // Gets rid of negative numbers
      // MISUNDERSTOOD QUESTION: Don't skip over numbers
      // if(innerSum + num > innerSum){
      //   innerSum += num;
      //   // Continue to next iteration
      //   continue;
      // }

      // Initialize innerSum at array[0]
      if (index === 0){
        innerSum = num;
        continue;
      }

      if(sum + num > sum){
        sum += num;
        continue;
      }
    }

    sum = innerSum;
  }
  
  console.log("sum = " + sum);
  console.log("");
  return sum;
}

// Testcases:
let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];
let array1 = [1];
let array2 = [1, -1];
let array3 = [-5, 4];

// 0, subarray = [1, -1]
let array4 = [1, -1, 1];
// 0, subarray = [1, -1]
let array5 = [1, -1, -1];
// 0, subarray = [-1, 1]
let array6 = [-1, -1, 1];

let array7 = [0, 0, -1];

largestSubarraySum(array1);
// largestSubarraySum(array);
// 16
// The largest subarray in this example is [5, 3, -7, 4, 5, 6], and its sum is 5 + 3 - 7 + 4 + 5 + 6 = 16
