export default function caesarCipher(string, shift) {
  let stringArray = string.split('');
  stringArray = stringArray.map((char) => {
    const charCode = char.charCodeAt(0);
    if (charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122)
      return char;

    const shiftedCharCode = charCode + shift;
    if (charCode <= 90 && shiftedCharCode > 90) {
      const wrappedCharCode = 64 + shiftedCharCode - 90;
      return String.fromCharCode(wrappedCharCode);
    } else if (charCode >= 97 && shiftedCharCode > 122) {
      const wrappedCharCode = 96 + shiftedCharCode - 122;
      return String.fromCharCode(wrappedCharCode);
    } else {
      return String.fromCharCode(shiftedCharCode);
    }
  });
  return stringArray.join('');
}
