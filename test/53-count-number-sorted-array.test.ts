import { test, expect } from 'vitest';
import search from './../sword-means-offer/53-count-number-sorted-array';

const nums = [5, 7, 7, 8, 8, 10]; const target = 8;
test('search', () => {
  expect(search(nums, target)).toEqual(1);
});

console.log('ddd', nums);
const nums1 = [5, 7, 7, 8, 8, 10]; const target1 = 19;
test('search', () => {
  expect(search(nums1, target1)).toEqual(1);
});
