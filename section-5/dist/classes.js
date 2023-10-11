"use strict";
class Department {
    constructor(n, departmentId) {
        this.departmentId = departmentId;
        this.employees = [];
        this.name = n;
    }
    static createEmployee(name) {
        return { name };
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
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(report) {
        if (!report) {
            throw new Error('Please pass in a valid report');
        }
        this.addReport(report);
    }
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(employee) {
        if (employee === 'Ozgur') {
            return;
        }
        this.employees.push(employee);
    }
    addReport(report) {
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
accounting.addEmployee('Ozgur');
accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = 'The newest report';
console.log(accounting.mostRecentReport);
const newEmployee = Department.createEmployee('Elizabeth');
console.log(newEmployee);
console.log(Department.fiscalYear);
