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
