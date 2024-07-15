import { createAction, props } from '@ngrx/store';
import { STUDENTS } from '../../../MODEL/Employeees.Model';

export const getemployees = createAction('[STUDENTS] Get STUDENTS');
export const setemployees = createAction('[STUDENTS] Set STUDENTS', props<{ STUDENTS: STUDENTS[] }>());
export const addstudent = createAction('[STUDENTS] Add STUDENTS', props<{ STUDENTS: STUDENTS }>());
export const deleteStudent = createAction('[STUDENTS] Delete STUDENTS', props<{ STUDENTID: number }>());
export const getsingleuser = createAction('[STUDENTS] GetSingle STUDENTS', props<{ STUDENTID: number }>());
export const setselectedstudent = createAction('[STUDENTS] Set Selected Student', props<{ STUDENTS: STUDENTS }>());
export const savestudents = createAction('[STUDENTS] Add STUDENTS', props<{ STUDENTID:number,STUDENTS: STUDENTS }>());