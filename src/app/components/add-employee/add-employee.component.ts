import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addstudent } from '../../STATE-MANAGEMENT/ACTIONS/Employee.Actions';
import { STUDENTS } from '../../../MODEL/Employeees.Model';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent  implements OnInit{
  
 
singleuser :any   

  constructor(private store :Store<any>)
  {

  }

 

 @ViewChild("id") ID:any
 @ViewChild("name") NAME:any
 @ViewChild("cid") CID:any

 ngOnInit(): void {
  this.store.select("STUDENTS").subscribe(res=>{
    if(res.SingleStudent==undefined)
    {
      return null
    }
    else{
     
       
     return res.SingleStudent.map((res:STUDENTS)=>{
        this.ID.nativeElement.value = res.StdId
        this.NAME.nativeElement.value = res.StdName
        this.CID.nativeElement.value = res.CourseId
      })
    }
  })    
    

 }

 add()
 {  
   let Data = {StdId: this.ID.nativeElement.value , StdName : this.NAME.nativeElement.value,CourseId:this.CID.nativeElement.value,CourseName:""} 
    
   this.store.dispatch(addstudent({STUDENTS:Data})) 
 }
}
