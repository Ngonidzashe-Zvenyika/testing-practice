import reverse from '../src/reverse-string';

test('Reverse "Cool" to be "looC".', () => {
  expect(reverse('Cool')).toBe('looC');
});
