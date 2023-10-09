class Department {
  private name: string;
  private employees: string[] = [];
  // "private" keyword means that that employees is now a property, which is only accessible from inside the class

  // readonly properties cannot be changed after initialization
  constructor(n: string, private readonly departmentId: string) {
    this.name = n;
  }

  describe() {
    console.log('Department: ' + this.name);
    console.log('Department Id: ' + this.departmentId);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting', 'id1');

// console.log(accounting);
accounting.addEmployee('John');
accounting.addEmployee('Jane');

// ERROR
// accounting.employees[2] = 'Anna'; // ERROR because "employees" is a private property
// ERROR

accounting.describe();
accounting.printEmployeeInformation();

// const accountCopy = { name: 's', describe: accounting.describe };
// accountCopy.describe();
