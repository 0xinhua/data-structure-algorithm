import { expect, test } from 'vitest';
import checkInterviewRoom from './../leet/252-interview-room';

test('checkInterviewRoom', () => {
  expect(checkInterviewRoom([[7, 10], [2, 4]])).toEqual(true);
});