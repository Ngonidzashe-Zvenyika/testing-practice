test('Add 24 and 22 to equal 46', () => {
  expect(calculator.add(24, 22)).toBe(46);
});

test('Subtract 3 from 22 to equal 19', () => {
  expect(calculator.subtract(22, 3)).toBe(19);
});

test('Multiply 3 by 5 to equal 15', () => {
  expect(calculator.multiply(3, 5)).toBe(15);
});

test('Divide 28 by 7 to equal 4', () => {
  expect(calculator.divide(28, 7)).toBe(4);
});
