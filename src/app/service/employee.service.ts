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
     return this.httpClient.get('https://api-mean-stack.herokuapp.com/api/employees');
   }

   insertData(data:any){
    return this.httpClient.post('https://api-mean-stack.herokuapp.com/api/employee/add', data);
   }

   getDataById(id:any){
    return this.httpClient.get('https://api-mean-stack.herokuapp.com/api/employee/' + id);
   }

   updateData(id:any, data:any){
    return this.httpClient.put('https://api-mean-stack.herokuapp.com/api/employee/edit/' + id, data);
   }

   deleteData(id:any){
    return this.httpClient.delete('https://api-mean-stack.herokuapp.com/api/employee/' + id);
   }
   
}
