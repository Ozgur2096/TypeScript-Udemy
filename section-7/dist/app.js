"use strict";
const names = [];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('success');
    }, 2000);
});
promise.then(result => {
    console.log(result);
});
