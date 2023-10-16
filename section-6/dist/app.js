"use strict";
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
