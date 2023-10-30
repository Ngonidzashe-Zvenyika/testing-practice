import capitalize from '../src/capitalize';

test('Capitalize the first letter in "thank you".', () => {
  expect(capitalize('thank you')).toBe('Thank you');
});
