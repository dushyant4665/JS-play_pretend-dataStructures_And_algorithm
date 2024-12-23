
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.


function reduce(nums, fn, init) {
    let result = init;   
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]); 
    }
    return result;
}
// example 
let nums = [1, 2, 3, 4];
let sum = function(accum, curr){return accum + curr;};
let init = 0;

console.log(reduce(nums, sum, init)); // Output: 10

let nums2 = [1, 2, 3, 4];
let sum2 = function(accum, curr) { return accum + curr * curr; };
let init2 = 100;
console.log(reduce(nums2, sum2, init2)); // Output: 130

let nums3 = [];
let sum3 = function(accum, curr) { return 0; };
let init3 = 25;
console.log(reduce(nums3, sum3, init3)); // Output: 25
