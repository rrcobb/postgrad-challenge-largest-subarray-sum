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
    // Make sure sum is not 0
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
  // Starting with assuming there's 2 items in array
  // else {
  //   let innerSum;

  //   for(let index in array){
  //     let num = array[index];
  //     // Gets rid of negative numbers
  //     // MISUNDERSTOOD QUESTION: Don't skip over numbers
  //     // if(innerSum + num > innerSum){
  //     //   innerSum += num;
  //     //   // Continue to next iteration
  //     //   continue;
  //     // }

  //     // Initialize innerSum at array[0]
  //     if (index === 0){
  //       innerSum = num;
  //       largestSubarray.push(num);
  //       continue;
  //     }

  //     else if(sum + num > sum){
  //       sum += num;
  //       largestSubarray.push(num);
  //       continue;
  //     }
  //   }

  //   sum = innerSum;
  // }

  // Check to see if all positive
  for(let num of array){
    // Currently ignores negatives at end
    if(num >= 0){
      largestSubarray.push(num);
      continue;
    } else{
      // Breaks out of loop as soon as a negative num is hit
      console.log(num, " is negative");
      break;
    }
  }

  // Removed negatives at beginning of array
  while(array[0] < 0){
    array.shift();
    largestSubarraySum(array);
  }
  for(let num of largestSubarray){
    sum += num;
  }

  // If all nums are positive
  // Couldn't get map to work
  // array.map((val) => {
  //   this.sum += val;
  //   console.log(this.sum.toString());
  // })
  
  console.log("sum = " + sum);
  console.log("");
  return sum;
}

// Testcases:
let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];
// 1, [1]
let array1 = [1];
// 1, [1]
let array2 = [1, -1];
// 4, [4]
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
