// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// https://leetcode.cn/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 输入：nums = [0,1,2,5,7]
// 输出：[]

// 先排个序
// 如果第一个最小的为 0 或大于0 返回 []


// 15. 三数之和


function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  const length = nums.length;
  let res = [];
  if (length < 3) return res
  for (let i = 0; i < length; i++) {
    let left = i + 1;
    let right = length - 1;
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      };
    };
  }
  return res;
};

export default threeSum;