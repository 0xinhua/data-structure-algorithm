// https://leetcode.cn/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/description/?languageTags=javascript

//统计一个数字在排序数组中出现的次数。

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

// 思路
// 1.暴力解法 for nums[i] === target  counter++
// 时间复杂度 O(n) 空间复杂度 O(1)
// 2.
// 二分法，比这个时间更少的 O(nlogn)  O(1)
// 因为已经排序找到第一个出现的位置，第二个出现的位置，那么次数 = 第二次出现 - 第一次出现  + 1
// 如果第一个出现的位置 -1 直接返回 0


function search(nums: number[], target: number): number {

  // const getFirstPosition = (nums, target): number => {
  //   let left = 0;
  //   let right = nums.length - 1;
  //   while (left < right) {
  //     const mid = Math.floor((left + right) / 2);
  //     if (nums[mid] >= target) {
  //       // [left ... mid]
  //       right = mid;
  //     } else if (nums[mid] < target) {
  //       // [mid ...right]
  //       left = mid + 1;
  //     };
  //   };
  //   return nums[left] === target ? left : -1;
  // };

  // const getLastPosition = (nums, target): number => {
  //   let left = 0;
  //   let right = nums.length - 1;
  //   //  [5,7,7,8,8,8,10,12], target = 8
  //   while (left < right) {
  //     const mid = Math.floor((left + right + 1) / 2);
  //     if (nums[mid] > target) {
  //       // [left ...mid]
  //       right = mid - 1;
  //     } else if (nums[mid] <= target) {
  //       // [mid ...right]
  //       left = mid;
  //     };
  //   };
  //   return nums[left] === target ? left : -1;
  // };

  // 合并成一个函数

  const getFirstLastPosition = (nums, target, isLastPosition?): number => {
    let left = 0;
    let right = nums.length - 1;
    //  [5,7,7,8,8,8,10,12], target = 8
    while (left < right) {
      const mid = Math.floor((left + right + isLastPosition ? 1 : 0) / 2);
      if (isLastPosition) {
        if (nums[mid] > target) {
          // [left ...mid]
          right = mid - 1;
        } else if (nums[mid] <= target) {
          // [mid ...right]
          left = mid;
        };
      } else {
        if (nums[mid] >= target) {
          // [left ... mid]
          right = mid;
        } else if (nums[mid] < target) {
          // [mid ...right]
          left = mid + 1;
        };
      }
    };
    return nums[left] === target ? left : -1;
  };


  const firstPosition = getFirstLastPosition(nums, target);
  if (firstPosition == -1) return 0;

  const lastPosition = getFirstLastPosition(nums, target, true);
  return lastPosition - firstPosition + 1;
};

export default search;
