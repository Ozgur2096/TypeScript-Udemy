// INTERFACES
// An interface describes the structure of an object  ---> it's like a custom type

// interface XInterface {
//   a: number
//   b: string
// }

// type XType = {
//   a: number
//   b: string
// };

interface Named {
  readonly name: string; // "readonly" is possible here
  output?: string; // optional property
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    // name?: string ---> ? means 'optional'
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let userOne: Greetable;

userOne = new Person('John');
// userOne.name = 'Max'; // ERROR because it's readonly

userOne.greet('Hi there, I am');
console.log(userOne);

// Interfaces as Function Types
// type
type AddFn = (a: number, b: number) => number;

let add: AddFn;
add = (a: number, b: number) => a + b;

// Interface
interface AddFunction {
  (a: number, b: number): number;
}

let add2: AddFunction = (a: number, b: number) => a + b;
