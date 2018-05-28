import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../employee/employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employees: IEmployee[];
  isLoading = false;

  _id: string;
  code: string;
  name: string;
  gender: string='Male';
  annualSalary: number;
  dateOfBirth: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.isLoading = true;
    this.employeeService.getEmployees().subscribe(
      data => {
        this.employees = data;
      },
      err => console.error(err),
      () => this.isLoading = false
    );
  }

  addEmployee() {
    this.isLoading = true;
    const newContact: IEmployee = {
      code: this.code,
      name: this.name,
      gender: this.gender,
      annualSalary: this.annualSalary,
      dateOfBirth: this.dateOfBirth
    }
    if (!this._id) {
      this.employeeService.addEmployee(newContact).subscribe(
        data => {
          console.log(data);
          this.getEmployees();
          this.clearFields();
        },
        err => console.error(err),
        () => this.isLoading = false
      );
    }
    else {
      newContact._id = this._id;
      this.employeeService.updateEmployee(newContact).subscribe(
        data => {
          console.log(data);
          this.getEmployees();
          this.clearFields();
        },
        err => console.error(err),
        () => this.isLoading = false
      );
    }
  }

  editEmployee(contact: IEmployee) {
    this._id = contact._id;
    this.code = contact.code;
    this.name = contact.name;
    this.gender = contact.gender;
    this.annualSalary = contact.annualSalary;
    this.dateOfBirth = contact.dateOfBirth;
  }

  deleteEmployee(contact: IEmployee) {
    if (confirm(`Are you sure to delete ${contact.name} ?`)) {
      this.isLoading = true;
      this.employeeService.deleteEmployee(contact._id).subscribe(
        data => {
          if (data.n == 1) {
            this.getEmployees();
          }
        },
        err => console.error(err),
        () => this.isLoading = false
      );
    }
  }
  trackByEmpCode(index: number, employee: IEmployee): string {
    return employee.code;
  }

  clearFields() {
    this.code = '';
    this.name = '';
    this.gender = 'Male';
    this.dateOfBirth = '';
    this.annualSalary = null;
    this._id = '';
  }
}
