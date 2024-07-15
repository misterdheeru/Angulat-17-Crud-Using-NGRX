import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addstudent, deleteStudent, getemployees, getsingleuser } from '../../STATE-MANAGEMENT/ACTIONS/Employee.Actions';
import { STUDENTS } from '../../../MODEL/Employeees.Model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule ,FormsModule ,AddEmployeeComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent  implements OnInit{

  singleuser:any
  constructor(private store : Store<any>)
  {
  
  }
  students:STUDENTS [] = []
  ngOnInit(): void {
    this.store.dispatch(getemployees())
    this.store.select("STUDENTS").subscribe(res=> this.students =res.STUDENTS)    
  }
  delete(StudentID:any)
  {
   this.store.dispatch(deleteStudent({STUDENTID:StudentID}))
  }
  update(StudentID:any)
  {
   this.store.dispatch(getsingleuser({STUDENTID:StudentID})) 
    
  }
}
