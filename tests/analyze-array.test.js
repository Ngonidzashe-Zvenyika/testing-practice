import analyzeArray from '../src/analyze-array';

test('Given [1,8,3,4,2,6] determine that 4 is the average', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Given [1,8,3,4,2,6] determine that 1 is the min', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Given [1,8,3,4,2,6] determine that 8 is the max', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('Given [1,8,3,4,2,6] determine that 6 is the length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
