class Department {
  static fiscalYear: number = 2023;
  private name: string;
  protected employees: string[] = [];
  // "private" keyword means that that employees is now a property, which is only accessible from inside the class
  // "protected" keyword means that that employees is now a property, which is only accessible from inside the class and the subclasses of the class

  // readonly properties cannot be changed after initialization
  constructor(n: string, private readonly departmentId: string) {
    this.name = n;
    // console.log(this.fiscalYear);        ---------> it wouldn't work    **Static Methods**
    // console.log(Department.fiscalYear);  ---------> it would work       **Static Methods**
  }

  // we can use static methods without initializing "new Department" it's like using Math.random or Math.PI ...
  static createEmployee(name: string) {
    return { name };
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

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super('IT', id); // inherited from 'department' constructor
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(report: string) {
    if (!report) {
      throw new Error('Please pass in a valid report');
    }
    this.addReport(report);
  }

  constructor(id: string, private reports: string[]) {
    super('Accounting', id);
    this.lastReport = reports[0];
  }
  addEmployee(employee: string) {
    if (employee === 'Ozgur') {
      return;
    }
    this.employees.push(employee);
  }
  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }
}

const IT = new ITDepartment('id2', ['John']);
IT.addEmployee('Max');
console.log(IT);

const accounting = new AccountingDepartment('id1', ['New Reports']);
accounting.addReport('Second Report');
console.log(accounting);
accounting.addEmployee('John');
accounting.addEmployee('Jane');
accounting.addEmployee('Ozgu');
accounting.addEmployee('Ozgur'); // addEmployee has been overwritten in the class "AccountingDepartment"

// ERROR
// accounting.employees[2] = 'Anna'; // ERROR because "employees" is a private property
// ERROR
accounting.describe();
accounting.printEmployeeInformation();
// const accountCopy = { name: 's', describe: accounting.describe };
// accountCopy.describe();

// GETTERS AND SETTERS
console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 'The newest report';
console.log(accounting.mostRecentReport);

// STATIC METHODS
const newEmployee = Department.createEmployee('Elizabeth');
console.log(newEmployee);
console.log(Department.fiscalYear);
