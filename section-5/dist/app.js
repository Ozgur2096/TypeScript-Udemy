"use strict";
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let userOne;
userOne = new Person('John');
userOne.greet('Hi there, I am');
console.log(userOne);
let add;
add = (a, b) => a + b;
let add2 = (a, b) => a + b;
