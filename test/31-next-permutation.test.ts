import { expect, test } from 'vitest';
import nextPermutation from './../leet/31-next-permutation';

// 输入：nums = [1,2,3]
// 输出：[1,3,2]

test('nextPermutation', () => {
  let res = [1, 2, 3]
  nextPermutation(res);
  expect(res).toEqual([1, 3, 2]);
});

// 输入：nums = [3,2,1]
// 输出：[1,2,3]


test('nextPermutation', () => {
  let res = [3, 2, 1];
  nextPermutation(res);
  expect(res).toEqual([1, 2, 3]);
});


// 输入：nums = [1,1,5]
// 输出：[1,5,1]

test('nextPermutation', () => {
  let res = [1, 1, 5];
  nextPermutation(res);
  expect(res).toEqual([1, 5, 1]);
});

//  输入： [1, 2, 3, 7, 6, 5, 4]
//  输出： [1,2,4,3,5,6,7]

test('nextPermutation', () => {
  let res = [1, 2, 3, 7, 6, 5, 4];
  nextPermutation(res);
  expect(res).toEqual([1, 2, 4, 3, 5, 6, 7]);
});
