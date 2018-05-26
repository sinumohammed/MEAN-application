import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee } from '../employee/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  // retrieving Employees
  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(environment.API_ENDPOINT);
  }

  // adding new Employee
  addEmployee(employee:IEmployee) {
    //let body = JSON.stringify(employee);
    return this.httpClient.post(environment.API_ENDPOINT, employee, httpOptions);
  }

  // update existing Employee
  updateEmployee(employee:IEmployee) {
    let body = JSON.stringify(employee);
    let endPoint = environment.API_ENDPOINT + employee._id;
    return this.httpClient.put(endPoint, employee, httpOptions);
  }

  // delete an Employee
  deleteEmployee(id:string) {
    let endPoint = environment.API_ENDPOINT + id;
    return this.httpClient.delete<any>(endPoint);
  }

}
