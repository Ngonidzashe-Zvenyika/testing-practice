export default function analyzeArray(array) {
  let min = Infinity;
  let max = -Infinity;
  const total = array.reduce((total, num) => {
    if (num > max) max = num;
    if (num < min) min = num;
    total += num;
    return total;
  }, 0);
  const length = array.length;
  const average = total / length;
  return {
    min,
    max,
    length,
    average,
  };
}
