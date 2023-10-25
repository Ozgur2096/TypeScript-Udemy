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

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

const extractedObject = extractAndConvert({ name: 'Jane' }, 'name');
console.log(extractedObject);

// GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('abc');
const textStorageResult = textStorage.getItems();
console.log(textStorageResult);

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Max' });
// objectStorage.addItem({ name: 'Mathilda' });
// objectStorage.removeItem({ name: 'Mathilda' });
// console.log(objectStorage.getItems());

// GENERIC UTILITY TYPES
// Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

// Readonly
const someNames = ['Max', 'Mathilda'];
