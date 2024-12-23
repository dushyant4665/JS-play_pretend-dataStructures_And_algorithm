/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  var reverse = 0;
  var temp = x;

  while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = ~~(temp / 10); //Math.floor(temp / 10)
  }

  return reverse == x;
};

const nums = 121;

const res = isPalindrome(nums);

console.log(res);

// var isPalindrome = function (x) {
//   return String(x) == String(x).split('').reverse().join('');
// };
