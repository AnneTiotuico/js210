/*
Write a function that takes an array of arrays as an argument, and returns a
new array that contains the sums of each of the sub-arrays.
*/

function matrixSums(arr) {
  return arr.map((subarr) => subarr.reduce((sum, num) => sum + num));
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]