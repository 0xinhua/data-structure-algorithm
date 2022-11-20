import { expect, test } from 'vitest';
import fib from '../leet/509-fibonacci-number';

// n=2
// 1
test('fib', () => {
  expect(fib(2)).toEqual(1);
});

// n=3
// 2

test('fib', () => {
  expect(fib(3)).toEqual(2);
});


// n=4
// 3

test('fib', () => {
  expect(fib(4)).toEqual(3);
});