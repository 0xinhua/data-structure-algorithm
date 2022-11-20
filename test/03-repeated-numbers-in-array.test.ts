import { test, expect } from 'vitest';
import { findRepeatNumber, findRepeatNumberWithSort } from './../sword-means-offer/03-repeated-numbers-in-array';

test('findRepeatNumberWithSort', () => {
  expect(findRepeatNumberWithSort([2, 3, 1, 0, 2, 5, 3])).toEqual(2);
});

test('findRepeatNumberWithSort', () => {
  expect(findRepeatNumber([2, 3, 1, 0, 2, 5, 3])).toEqual(2);
});
