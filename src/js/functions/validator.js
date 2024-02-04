export default function validator(number) {
  const ints = number
    .split('')
    .filter((el) => el !== ' ')
    .map((el) => Number(el));

  let result = 0;

  if (ints.length % 2 === 0) {
    for (let i = 0; i < ints.length; i++) {
      if (i === 0 || i % 2 === 0) {
        const mult = ints[i] * 2;
        result += mult > 9 ? mult - 9 : mult;
      } else {
        result += ints[i];
      }
    }
  } else {
    for (let i = 0; i < ints.length; i++) {
      if (i === 0 || i % 2 === 0) {
        result += ints[i];
      } else if (i % 2 !== 0) {
        const mult = ints[i] * 2;
        result += mult < 9 ? mult : mult - 9;
      }
    }
  }
  return result % 10 === 0;
}
