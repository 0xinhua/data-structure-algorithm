import twoSum from './../leet/01-two-sum';
import { expect, test } from 'vitest';

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
test('twoSum', () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

// 输入：nums = [3,3], target = 6
// 输出：[0,1]
test('twoSum', () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
})

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
})