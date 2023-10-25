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
function extractAndConvert(obj, key) {
    return obj[key];
}
const extractedObject = extractAndConvert({ name: 'Jane' }, 'name');
console.log(extractedObject);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('abc');
const textStorageResult = textStorage.getItems();
console.log(textStorageResult);
function createCourseGoal(title, description, completeUntil) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
}
const someNames = ['Max', 'Mathilda'];
