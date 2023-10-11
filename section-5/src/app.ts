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
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
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
