import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=98875111208701b956a9e50ee6b5d2e0';
  //private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
  private baseUrl = 'http://127.0.0.1:8000/api/customers';

  constructor(private http: HttpClient) { }



  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    var auth_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYwODc0OTUxMCwiZXhwIjoxNjA4NzUzMTEwLCJuYmYiOjE2MDg3NDk1MTAsImp0aSI6IjFLbzRhdHFzUnFVSmJWeXIiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.j-pbmUbt_u9d5IdQKYx-rDQU49bqGQ4bhDiSj-MQcCY';
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.post(`${this.baseUrl}`, employee, { headers: reqHeader });
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployeesByName(name: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/search/`, name);
  }
}