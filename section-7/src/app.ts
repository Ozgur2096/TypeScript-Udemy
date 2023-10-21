const names: Array<any> = [];

const promise: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('success');
  }, 2000);
});

promise.then(result => {
  console.log(result);
});

// Creating a Generic Function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: 'Joe' }, { age: 30 });
console.log(mergedObject.name);

// another function example
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = 'Got no value';
  if (element.length > 0)
    descriptionText = 'Got ' + element.length + ' element(s)';
  return [element, descriptionText];
}

console.log(countAndDescribe('Joe is going to the cinema'));
console.log(countAndDescribe([1, 2, 3, 4, 'af', 'op']));
