// OBJECT AND ARRAYS

// string[] --> array of strings
// any[] --> array of any type

const person: {
  name: string;
  age: number;
  hobbies: string[]; // array of strings
  role: [number, string]; // TUPLE ---> it will take only 2 elements which are number (first one) and string (second one)
} = {
  name: 'John',
  age: 34,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

// person.role = [0, 'author', 'user']; // ERROR! ---> TypeScript can catch this one BUT
person.role.push('user'); // it cannot catch "push"

// I can write like this above but it is not necessary to write explicitly because TypeScript can infer it from the object
// I can simply write:
// const person = {
//   name: 'John',
//   age: 34,
//   ...
// };

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // If I type '.', I can see the string methods that I can use because TypeScript knows about the type beforehand.

  // console.log(hobby.map()); ---> ERROR!
}

// ENUM

enum Role {
  ADMIN = 3,
  READ_ONLY, // READ_ONLY = 200,
  AUTHOR, // AUTHOR = 'AUTHOR
}
// Starting value is 0 as default, but we can start with any value or we can define all properties

const person2 = {
  name: 'Jane',
  age: 34,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};
