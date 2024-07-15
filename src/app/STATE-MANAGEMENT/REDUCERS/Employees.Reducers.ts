import { createReducer, on } from "@ngrx/store";
 
import {  addstudent, deleteStudent, getsingleuser, savestudents, setemployees } from "../ACTIONS/Employee.Actions";
import {  STUDENTS } from "../../../MODEL/Employeees.Model";
import { state } from "@angular/animations";

export interface student  
{
    STUDENTS :  STUDENTS [] 
}

export let INITIALSTATE : student = {
    STUDENTS   : []
} 
 

export const employeesRedusers = createReducer(
    INITIALSTATE,
    on(setemployees,(state,DATA)=>{
        return{...state , STUDENTS:DATA.STUDENTS}
    }),
    
    on(addstudent, (state, { STUDENTS }) => ({
        ...state,
        STUDENTS: [...state.STUDENTS, STUDENTS]
      })),

      on(deleteStudent,(state,DATA)=>{
        return {
            ...state ,
             employees:DATA.STUDENTID
        }
      }),

      on(getsingleuser,(state,DATA)=>{
        return {
            ...state ,
            SingleStudent: state.STUDENTS.filter(student => student.StdId === DATA.STUDENTID)
        }
      }),
      on(savestudents,(State,{STUDENTS})=>{
        return{
            ...State,
            employees: [...State.STUDENTS, STUDENTS]
        }
      })
     
    
) 