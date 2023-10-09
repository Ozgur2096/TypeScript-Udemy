"use strict";
class Department {
    constructor(n, departmentId) {
        this.departmentId = departmentId;
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
        console.log('Department Id: ' + this.departmentId);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting', 'id1');
accounting.addEmployee('John');
accounting.addEmployee('Jane');
accounting.describe();
accounting.printEmployeeInformation();
