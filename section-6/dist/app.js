"use strict";
var _a;
const e1 = {
    name: 'Joe',
    privileges: ['priv1'],
    startDate: new Date(),
};
function add(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
function printEmployeeInformation(employee) {
    console.log('Name: ' + employee.name);
    if ('privileges' in employee) {
        console.log('Privileges: ' + employee.privileges);
    }
    if ('startDate' in employee) {
        console.log('Start Date: ' + employee.startDate);
    }
}
const employee1 = {
    name: 'Employee1',
    startDate: new Date(),
};
printEmployeeInformation(employee1);
const employee2 = {
    name: 'Employee2',
    privileges: ['privilege2'],
    startDate: new Date(),
};
printEmployeeInformation(employee2);
const employee3 = {
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
    loadCargo(amount) {
        console.log('Loading cargo...' + amount + 'kg');
    }
}
function useVehicle(vehicle, amount = 0) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
useVehicle(v1);
useVehicle(v2, 100);
function moveAnimal(animal) {
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
const sparrow = {
    animalType: 'bird',
    flyingSpeed: 100,
};
const myHorse = {
    animalType: 'horse',
    runningSpeed: 80,
};
moveAnimal(sparrow);
moveAnimal(myHorse);
const paragraph = document.querySelector('p');
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there';
const errorBag = {
    email: 'Not a valid email address!',
    username: 'Must start with a letter',
};
function add2(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
const result = add2('John', 'Doe');
result.split(' ');
const fetchedData = {
    userId: 'u1',
    name: 'Max',
};
const fetchUserData = {
    id: 'ul',
    name: 'Max',
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const someInput = '';
const storeData = someInput || 'DEFAULT';
const storeData2 = someInput !== null && someInput !== void 0 ? someInput : 'DEFAULT';
console.log(storeData);
console.log(storeData2);
