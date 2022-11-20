import { expect, test } from 'vitest';
import climbStairs from '../leet/70-climbing-stairs';

// 输入：n = 2
// 输出：2
test('climbStairs', () => {
  expect(climbStairs(2)).toEqual(2);
});

// 输入：n = 3
// 输出：3

test('climbStairs', () => {
  expect(climbStairs(3)).toEqual(3);
});


// 输入：n = 4
// 输出：5

test('climbStairs', () => {
  expect(climbStairs(4)).toEqual(5);
});


// 输入：n = 5
// 输出：8

test('climbStairs', () => {
  expect(climbStairs(5)).toEqual(8);
});