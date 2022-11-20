import { expect, test } from 'vitest';
import arrayQuickSort from './../algo/array-quick-sort';


const data = [6, 1, 3, 9, 10];
test('test', () => {
  expect(arrayQuickSort(data)).toEqual([1, 3, 6, 9, 10])
});