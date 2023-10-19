// Intersection types allow us to combine other types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Joe',
  privileges: ['priv1'],
  startDate: new Date(),
};

type Combinable = number | string;
type Numeric = number | boolean;

type Universal1 = Combinable | Numeric; // type Universal1 = string | number | boolean
type Universal2 = Combinable & Numeric; // type Universal2 = number

// TYPE GUARDS ---> typeof, in, instanceof and etc.

function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(employee: UnknownEmployee): void {
  console.log('Name: ' + employee.name);
  if ('privileges' in employee) {
    console.log('Privileges: ' + employee.privileges);
  }
  if ('startDate' in employee) {
    console.log('Start Date: ' + employee.startDate);
  }
}

const employee1: UnknownEmployee = {
  name: 'Employee1',
  startDate: new Date(),
};
printEmployeeInformation(employee1);

const employee2: UnknownEmployee = {
  name: 'Employee2',
  privileges: ['privilege2'],
  startDate: new Date(),
};
printEmployeeInformation(employee2);

const employee3: UnknownEmployee = {
  name: 'Employee3',
  privileges: ['privilege3'],
};
printEmployeeInformation(employee3);

class Car {
  drive() {
    console.log('driving...');
  }
}

class Truck {
  drive() {
    console.log('driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount + 'kg');
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle, amount: number = 0) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(amount);
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2, 100);

// DISCRIMINATED UNIONS

interface Bird {
  animalType: 'bird';
  flyingSpeed: number;
}

interface Horse {
  animalType: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.animalType) {
    case 'bird':
      {
        speed = animal.flyingSpeed;
      }
      break;
    case 'horse': {
      speed = animal.runningSpeed;
    }
  }

  console.log('Moving with speed: ' + speed);
}

const sparrow: Animal = {
  animalType: 'bird',
  flyingSpeed: 100,
};
const myHorse: Animal = {
  animalType: 'horse',
  runningSpeed: 80,
};

moveAnimal(sparrow);
moveAnimal(myHorse);

// TYPE CASTING

const paragraph = document.querySelector('p'); // const paragraph: HTMLParagraphElement | null

// Version 1
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );

// Version 2
const userInputElement = document.getElementById(
  'user-input'
) as HTMLInputElement;
userInputElement.value = 'Hi there';

// INDEX PROPERTIES

interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email address!',
  username: 'Must start with a letter',
};

// FUNCTION OVERLOADS

type Combinable2 = number | string;

function add2(n1: number, n2: number): number;
function add2(n1: number, n2: string): string;
function add2(n1: string, n2: string): string;
function add2(n1: string, n2: string): string;

function add2(n1: Combinable2, n2: Combinable2) {
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add2('John', 'Doe');
result.split(' '); // I can use split method here because I defined all possibilities
// If I wouldn't define as 'function add2(n1: string, n2: string): string;'
// I could not use 'split' here because Combinable2 type has no 'split' method

// OPTIONAL CHAINING  ----> '?'

const fetchedData = {
  userId: 'u1',
  name: 'Max',
  // job: {title: 'CEO', description: 'My own company'}
};

// console.log(fetchedData?.job?.title);   // ERROR ---> it didn't work, I don't know why...
// There are another solutions as:
interface JobData {
  title: string;
  description: string;
}
interface FetchUserData {
  id: string;
  name: string;
  job?: JobData;
}

const fetchUserData: FetchUserData = {
  id: 'ul',
  name: 'Max',
  // job: { title: 'CEO', description: 'My own company' }
};
console.log(fetchUserData?.job?.title); // undefined

// NULLISH COALESCING

// Traditional approach --> it doesn't matter if the input are null, undefined, '' or 0, storeData will be 'DEFAULT'
const someInput = '';
const storeData = someInput || 'DEFAULT';

// TypeScript approach --> storeData will be 'DEFAULT', if the input is only null or undefined.
const storeData2 = someInput ?? 'DEFAULT';

console.log(storeData);
console.log(storeData2);
