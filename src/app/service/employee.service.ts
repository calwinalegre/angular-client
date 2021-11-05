import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) {

   }

   getData(){
     return this.httpClient.get(environment.apiUrl + '/api/employees');
   }

   insertData(data:any){
    return this.httpClient.post(environment.apiUrl + '/api/employee/add', data);
   }

   getDataById(id:any){
    return this.httpClient.get(environment.apiUrl + '/api/employee/' + id);
   }

   updateData(id:any, data:any){
    return this.httpClient.put(environment.apiUrl + '/api/employee/edit/' + id, data);
   }

   deleteData(id:any){
    return this.httpClient.delete(environment.apiUrl + '/api/employee/' + id);
   }
   
}
