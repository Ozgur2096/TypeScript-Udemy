function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(result: number) {
  // VOID ------> function printResult(result: number): void
  console.log('Result is ' + result);
}

// function printResult(result: number): undefined {
//   console.log('Result is ' + result);
//   return; ---> // If you don't add this line, you will get a compiler warning, because TypeScript has another type for functions -> VOID
// }

// FUNCTIONS AS TYPES

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // Compilation Error

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, result => {
  console.log(result);
});
