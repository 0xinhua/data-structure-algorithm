// https://leetcode.cn/problems/next-permutation/description/

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。

// 输入：nums = [1,2,3]
// 输出：[1,3,2]


// 思路：

// 字典序排序是指按字母表位置排序
// 这个题的意思其实是将arr 元素组合后去找到比它大，刚好排在它后面的那个数, 如果已经是最大的，输出最小值
// arr = [1,2,3] => 123 =>  132 213 231 312 321
// arr = [1,2,3,4,5,6] => 123456 => 123465 123546 123564 123645 123654

// 思路一 枚举所有组合，找到它的位置的下一个，如果是最后一个返回第一个
// 从右侧查找，把更大的数跟前面更小的数换位置，找到第一个升序的两个数，然后把更换之后的数反转排序

// 1237654 => 3 7 的位置替换掉3，4比较合适的，124 7653 => 1243567
// [1, 2, 3, 7, 6, 5, 4]

// ! tip 原地修改数组
// 临界值 [1] return [1]

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let index = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      index = i - 1;
      // 找到需要交换值的下标
      for (let j = nums.length - 1; j > index; j--) {
        if (nums[j] > nums[index]) {
          const temp = nums[index]
          nums[index] = nums[j];
          nums[j] = temp;
          // 右边数组反转一下
          let right = nums.splice(index + 1);
          right.reverse();
          nums.push(...right);
          return
        };
      };
    };
    if (i === 0) {
      // 如果没有说明是最大的一个数，返回最新数
      nums.reverse();
      return
    }
  }
};

export default nextPermutation;
