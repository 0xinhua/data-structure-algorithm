// https://leetcode.cn/problems/palindrome-number/

// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// function isPalindrome(x: number): boolean {
//   let arr =  (x + '').split('').reverse();
//   const y = Number(arr.join(''));
//   return x === y
// };

function isPalindrome(x: number): boolean {
  const str = (x + '');
  let l = str.length;
  if (l === 1) {
    return true;
  };
  let i = 0;
  while (l >= 0 && i < l - 1) {
    if (str[i] !== str[l - 1]) return false
    i++;
    l--;
  };
  return true;
};

export default isPalindrome;
