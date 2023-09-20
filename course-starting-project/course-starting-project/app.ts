// Union Type ---------> number | string
// Literal Types ---------> 'as-number' | 'as-string'
// Type Aliases / Custom Types
type Combinable = number | string;

function combine(
  input1: number | string,
  input2: Combinable,
  resultConversion: 'as-number' | 'as-string'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-string');
console.log(combinedNames);
