// An interface describes the structure of an object
// We can use it to describe how an object should look like
// It only exist in typescript, not in vanilla JavaScript
// Unless a class we won't use it as a blueprint, just as a custom type (more or less?)
// We can't assign values as in initialization

interface PersonUsingInterface {
  // We can define only the type of the fields/properties:
  name: string;
  age: number;

  // We can define only the structure of the method:
  greet(phrase: string): void;
}

// With an interface we can define apart other aspects of the structure, if something was missing:
interface PersonUsingInterface {
  // We can define later another part of the structure using an interface (is more flexible)
  language: string;
}

// ***********************************************************
// *                                                         *
// *                  interface vs type                      *
// *                                                         *
// ***********************************************************

// When using type instead of interface we need to define everything at once
type PersonUsingType = {
  // We can define only the type of the fields/properties:
  name: string;
  age: number;
  language: string;

  // We can define only the structure of the method:
  greet(phrase: string): void;
};

// But with type we can't do the same. It would show an error: TS2300: Duplicate identifier 'PersonVersion2'.
// type PersonVersion2 = {
//     language: string;
// };

// We can use an interface to type check an object
let user1: PersonUsingInterface;
// We can also use a type to type check an object
let user2: PersonUsingType;

user1 = {
  name: 'Max',
  age: 30,
  language: 'German',
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user2 = {
  name: 'Reinier',
  age: 42,
  language: 'Spanish',
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there - I am');
user2.greet('Qué bolá azere - I am');
