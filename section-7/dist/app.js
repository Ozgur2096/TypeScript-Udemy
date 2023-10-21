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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObject = merge({ name: 'Joe' }, { age: 30 });
console.log(mergedObject.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length > 0)
        descriptionText = 'Got ' + element.length + ' element(s)';
    return [element, descriptionText];
}
console.log(countAndDescribe('Joe is going to the cinema'));
console.log(countAndDescribe([1, 2, 3, 4, 'af', 'op']));
