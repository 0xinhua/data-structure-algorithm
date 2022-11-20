// 35. 搜索插入位置
// https://leetcode.cn/problems/search-insert-position/description/?languageTags=javascript

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

function searchInsert(nums: number[], target: number): number {
  // O(logn) 二分法 归并 快排
  // 存在的话返回目标值索引
  // 不存在插入
  const index = nums.indexOf(target);
  if (index > -1) return index;
  nums = nums.concat(target);
  nums = quickSort(nums);
  console.log('nums', nums);
  return nums.indexOf(target);

  function quickSort(nums) {
    if (nums.length <= 0) return nums;
    let left = [];
    let right = [];
    const midIndex = Math.floor(nums.length / 2);
    const mid = nums.splice(midIndex, 1)[0];
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i];
      if (item > mid) {
        right.push(item);
      } else {
        left.push(item);
      };
    };
    return quickSort(left).concat(mid, quickSort(right));
  };

};

// 二分法查找

// 有序数组
// 小于 [0] return 0
// 大于 [length -1] length
// 无重复元素
// left <= right
// left right mid ，用 mid 跟 target 比较
// if (target > mid) 说明在右边区间 left = midIndex
// if (target < mid) 左边 right = midIndex
// if (target = mid) return midIndex
// return midIndex + 1


function searchTargetInsert(nums: number[], target: number): number {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length]) return nums.length;
  let left = 0;
  let right = nums.length - 1;
  let midIndex = Math.floor((right - left) / 2 + left);
  let mid = nums[midIndex];
  while (left <= right) {
    if (target === mid) return midIndex;
    if (target > mid) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    };
  }
  return midIndex + 1;
}

export default searchTargetInsert;
