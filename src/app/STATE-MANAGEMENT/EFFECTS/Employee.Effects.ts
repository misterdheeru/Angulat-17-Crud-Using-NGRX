import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CrudService } from "../../services/crud.service";
import { addstudent, deleteStudent, getemployees, getsingleuser, savestudents, setemployees, setselectedstudent } from "../ACTIONS/Employee.Actions";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class EmployeeEffect {
  constructor(private actions$: Actions, private service: CrudService) {}

  FetchEmployees$ = createEffect(()=>
     this.actions$.pipe(
        ofType(getemployees),
        mergeMap(()=>this.service.getProducts().pipe(map(res=>setemployees({STUDENTS:res}))))
     )
  )

  AddStudentRecord = createEffect(()=>this.actions$.pipe(
   ofType(addstudent),
   mergeMap((action)=>this.service.addStudent(action.STUDENTS).pipe(
 
    map(()=>addstudent({STUDENTS:action.STUDENTS})),
    map(()=>getemployees())
   ))
  ))
  
  deleteStudentRecord = createEffect(()=>this.actions$.pipe(
   ofType(deleteStudent),
   mergeMap((action)=>this.service.dletestudent(action.STUDENTID).pipe(
      map(()=>deleteStudent({STUDENTID:action.STUDENTID})),
      map(()=>getemployees())
   ))
  ))

  getSingleStudent = createEffect(()=>this.actions$.pipe(
   ofType(getsingleuser),
   mergeMap((action)=>this.service.getSingleStudent(action.STUDENTID).pipe(
      map((res:any)=>setselectedstudent({STUDENTS:res}))
   ))
  ))
  
  
  saveusers = createEffect(()=>this.actions$.pipe(
   ofType(savestudents),
   mergeMap((action)=>this.service.savesingl(action.STUDENTID,action.STUDENTS).pipe(
      map((res:any)=>setselectedstudent({STUDENTS:res}))
   ))
  ))
  


}
