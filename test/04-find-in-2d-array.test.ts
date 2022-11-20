import { expect, test } from 'vitest';
import findNumberIn2DArray from './../sword-means-offer/04-find-in-2d-array'

let matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
let target = 5;

test('findNumberIn2DArray', () => {
  expect(findNumberIn2DArray(matrix, target)).toEqual(true);
});

let matrix1 = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
let target1 = 1;

test('findNumberIn2DArray', () => {
  expect(findNumberIn2DArray(matrix1, target1)).toEqual(true);
});


let matrix2 = [[]];
let target2 = 5;

test('findNumberIn2DArray', () => {
  expect(findNumberIn2DArray(matrix2, target2)).toEqual(false);
});