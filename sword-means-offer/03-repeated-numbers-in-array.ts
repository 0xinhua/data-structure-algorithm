// https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/description/?favorite=xb9nqhhg&languageTags=javascript
// 剑指 Offer 03. 数组中重复的数字
// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3 


// 使用 map 记录 
// 时间复杂度：循环一遍 O(n)
// 空间复杂度：O(n)
export function findRepeatNumber(nums: number[]): number {

  // 2 map 记录数字出现的次数 大于 1 的返回
  const map = new Map();
  for (let key of nums) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  for (let [key, val] of map) {
    if (val > 1) {
      return key;
    }
  }

};



// 字典序排序，如果 i === i+1 返回 i

export function findRepeatNumberWithSort(nums: number[]): number {

  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      return nums[i]
    }
  }

};
