import caesarCipher from '../src/caesar-cipher';

test('Encrypt "pray at dawn" to equal "tvec ex hear" with a shift of 4.', () => {
  expect(caesarCipher('pray at dawn', 4)).toBe('tvec ex hear');
});

test('Encrypt "zvenyika" to equal "dzircmoe" with a shift of 4.', () => {
  expect(caesarCipher('zvenyika', 4)).toBe('dzircmoe');
});

test('Encrypt "PRAY AT DAWN" to equal "TVEC EX HEAR" with a shift of 4.', () => {
  expect(caesarCipher('PRAY AT DAWN', 4)).toBe('TVEC EX HEAR');
});

test('Encrypt "ZVENYIKA" to equal "DZIRCMOE" with a shift of 4.', () => {
  expect(caesarCipher('ZVENYIKA', 4)).toBe('DZIRCMOE');
});

test('Encrypt "!!pray-at-dawn." to equal "!!tvec-ex-hear." with a shift of 4.', () => {
  expect(caesarCipher('!!pray-at-dawn.', 4)).toBe('!!tvec-ex-hear.');
});

test('Encrypt "!!PRAY-AT-DAWN." to equal "!!TVEC-EX-HEAR." with a shift of 4.', () => {
  expect(caesarCipher('!!PRAY-AT-DAWN.', 4)).toBe('!!TVEC-EX-HEAR.');
});
