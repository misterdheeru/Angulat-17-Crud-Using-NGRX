import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { STUDENTS } from '../../MODEL/Employeees.Model';
 

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpclient :HttpClient) { }

  getProducts()
  {
    return this.httpclient.get<STUDENTS[]>("http://localhost/Exmp-1/api/Students")
  }
  addStudent(data:any)
  {
    return this.httpclient.post<STUDENTS[]>("http://localhost/Exmp-1/api/Students",data)
  }
  dletestudent(ID:any)
  {
    return this.httpclient.delete(`http://localhost/Exmp-1/api/Students/${ID}`)
  }
  getSingleStudent(ID:any)
  {
    return this.httpclient.get(`http://localhost/Exmp-1/api/Students/${ID}`)
  }
  
  savesingl(ID:any,DATA:STUDENTS)
  {
    return this.httpclient.put(`http://localhost/Exmp-1/api/Students/${ID}`,DATA)
  }
}
