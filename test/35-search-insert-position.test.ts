import { test, expect } from 'vitest';
import searchTargetInsert from './../leet/35-search-insert-position';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const target = 5;

test('searchTargetInsert', () => {
  expect(searchTargetInsert(nums, target)).toEqual(4);
});

const nums1 = [1, 2, 10, 11, 12];
const target1 = 5;

test('searchTargetInsert', () => {
  expect(searchTargetInsert(nums1, target1)).toEqual(2);
});

const nums2 = [0, 11, 12];
const target2 = 13;

test('searchTargetInsert', () => {
  expect(searchTargetInsert(nums2, target2)).toEqual(3);
});
