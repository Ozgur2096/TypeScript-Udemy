"use strict";
let user1;
let user2;
user1 = {
    name: 'Max',
    age: 30,
    language: 'German',
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user2 = {
    name: 'Reinier',
    age: 42,
    language: 'Spanish',
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hi there - I am');
user2.greet('Qué bolá azere - I am');
