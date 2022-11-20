// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5


// 求一个有序数组的中位数，有两种情况:

// 数组长度为奇数，中位数是数组的中间数字: arr[Math.floor((arr.length + 1) / 2) - 1]
// 数组长度为偶数，中位数是数组的中间两个数字和除以2: (arr[Math.floor((arr.length + 1) / 2) - 1] + arr[Math.floor((arr.length + 2) / 2] - 1) / 2


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  let left = Math.floor((len1 + len2 + 1) / 2);
  let right = Math.floor((len1 + len2 + 2) / 2);
  return (findkth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, left) + findkth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, right)) / 2;
};

function findkth(arr1, start1, end1, arr2, start2, end2, k) {
  let n = end1 - start1 + 1;
  let m = end2 - start2 + 1;
  if (n > m) return findkth(arr2, start2, end2, arr1, start1, end1, k);
  if (n === 0) return arr2[start2 + k - 1];
  if (k === 1) return Math.min(arr1[start1], arr2[start2]);
  let i = start1 + Math.min(n, Math.floor(k / 2)) - 1;
  let j = start2 + Math.min(m, Math.floor(k / 2)) - 1;
  if (arr1[i] > arr2[j]) {
    return findkth(arr1, start1, end1, arr2, j + 1, end2, k - (j - start2 + 1));
  } else {
    return findkth(arr1, i + 1, end1, arr2, start2, end2, k - (i - start1 + 1));
  }
}

// 思路二 合并后快排

export function findMedianSortedArraysWithSort(nums1: number[], nums2: number[]): number {
  nums1 = nums1.concat(nums2);
  const length = nums1.length;
  function quickSort(nums) {
    if (nums.length === 0) return nums;
    const midindex = Math.floor(nums.length / 2);
    const mid = nums.splice(midindex, 1);
    let left = [], right = [];
    for (let i = 0; i < nums.length; i++) {
      const item = nums[i];
      if (item > mid) {
        right.push(item);
      } else {
        left.push(item);
      }
    }
    return quickSort(left).concat(mid, quickSort(right));
  };
  nums1 = quickSort(nums1);

  return length % 2 ? nums1[Math.floor(length / 2)] : ((nums1[length / 2] + nums1[length / 2 - 1]) / 2);
};