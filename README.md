


# NGRX

WHY NGRX : Okavela Nikada Different Types Of Releationships of Components Unaee anukooo 
apudu niku Data Transfer Chysukovalee antee Component communication use Chysi Chyale antee
Chala time taking and More Logical Process...
TO RESOLEVE THIS ISSUE : Thats Why we are going to be use ngrx concept  Manam Data ni Oka Store lo 
Petukutamuuu Kalisinapuduu A component kii iynaaa evachu by using store.select("") method thoni...

## INSTALL 

ng add @ngrx/store  and  ng add @ngrx/effects 

ng add @ngrx/store    : It is going to create Ngrx store and  it will implement some automatic imports when we use ng add
ng add @ngrx/effects  : It is Going to perform http actions  and   it will implement some automatic imports when we use ng add


## PREDEFINE METHODS 

Store   : In Store We are Going To be Store the Final Data  
TELUGUFORMATE: // Store lo manam Data ni store chysukutamuu and avasaram unapudu a component ki iyana easy ga share chyachu 
Action  : It is  going to take type :  and payload in another way we can call it as props<{}> it is Generic type :  
TELUGUFORMATE : // E action Function Em chysuthadhi anteee type and payload return chysidhi 
Reduser : It is an function  going to take an action , payload from actionfunction and we will write logic to perform an operation tasks like add delete update . Store.dispach(updatename()) dispach method it is going to call an ACTION  
TELUGUFORMATE  : // Reduserkuda oka function aaa. e function  Actionfunction lonichi type , payload tesukoni a type ki thagatugaa action perform chysee logic rasukutamu 
Effects : Itis used to update store data which comes from  an api call
TELUGUFORMATE : // Manam action ni dispach chysinapudu like ela : store.dispach(getusers()) ekada em ithadhi antee action reduser kadiki podhu createEffects Effect kadiki pothadhi
ekada manam Male Reduser ki mapy chyseetatuu manam logic radukovale...

## HOW TO CREATE ACTION , DEDUSER , STORE AND EFFECTS

createActon() 
createReduser()
createEffects()

To Create Above Method We Need To Import :

import { createAction, props } from "@ngrx/store"; 
import { createReducer, on } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';


## EFFECTS EXAMPLE CODE EXPLAINATION
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EmployeesCrudeService } from '../../Services/employees-crude.service';
import { getEmployees, setEmployees } from '../Actions/EmployeeAction';

@Injectable()
export class employeesEffect {
  constructor(
    private actions: Actions,
    private empservice: EmployeesCrudeService
  ) {}

  FetchEmployees = createEffect(() =>
    this.actions.pipe(
      ofType(getEmployees),
      mergeMap(() =>
        this.empservice.getData()
          .pipe(map((res) => setEmployees({ employees: res })))
      )
    )
  );
}


## STEP 1
import { Injectable } from '@angular/core';
@Injectable() : Here We are using Injectable when we use this that time we can perform Dependancy injecion it is going to be work like an service file
TELUGUFORMATE : Apudu itee manam @Injectable use chysathamoo apudu mana class oka service file laga work chysidhi
## STEP 2
constructor(private actions: Actions,private empservice: EmployeesCrudeService){}

=> In Constructor We are Injecting Dependancys 
      import { Actions, createEffect, ofType } from '@ngrx/effects';
      Actions : When we create Actions in NGRX it is going to be emit that action as an Observable Formate 
TELUGUFORMATE : Ekada e Action Em Chysuthudhi  antee ngrx lo manam action create chysidhi ekada adhi Observable Formate lo emit chysidhi
ekada manam epudu iyna store.dispach(getusers()) chysinapudu ekada e action type  anee dhi check chysi modify chyale.

EmployeesCrudeService() : Here We Need To get the service file 
## STEP 3

import { Actions, createEffect, ofType } from '@ngrx/effects';
createEffects() : it is predefine Method From ngrx/effect . Itis used to update store data which comes from  an api call
1.It is an Higher Order Function 
TELUGUFORMATE   : Ekada Ani api's calls untee ani createEffects Methos manam create chysukovale
1. createEffect()  oka function lopala manam another call back function kuda rayachu function inside function. andulo manam logic rasthamu.


createEffect(
  ()=>

  
)

2. WHAT INNER FUNCTION SHOULD DO :  

createEffect(
  ()=>

  EX : store.dispach(setemp())

 In Inner function what we should do means when we call dispach function  it should be map the action 
 when the action will come that time we need to perform an Api Call after getting that api response angain we need to 
 Dispach another action 
 
 TELUGUFORMATE : E inner function lo manam em chysathamu antee.  Apudu itee Manam dispach function ni call chysathamoo 
 apudu manaki acion Observable  aneedhi trigger ithadhi adhi effect loki poee manam trigger chysina action Observable  akada una action match 
 itee akada manam API Rasathamu  Tharavatha A Api Response Ni tesukoni male Dispach chysathamu veree Action lo. 
 
)
## STEP 4
 FetchEmployees = createEffect(() =>
    this.actions.pipe(
      ofType(getEmployees),
      mergeMap(() =>
        this.empservice.getData()
          .pipe(map((res) => setEmployees({ employees: res })))
      )
    )
  );

[LINE 135  ]
    this.actions.pipe(// Here What We Are Doing Means by using pipe we are going to modifying the Action Observable 
       // Ekad Action Anee Observable  Em emit chysuthudhi antee  mana Application Lo creat Chyana Actions 
      anii Ekada Amit chysuthudhi. 
[LINE  136]  
       ofType(getEmployees), 
       // Ekada ofType Em Cysuthudhi antee Manamm DIspach CHysina action And getEmployees Anee action Two match itee nee Manaki API call pothadhi
   
    )
[LINE  136]  
mergeMap(() =>
        this.empservice.getData()
          .pipe(map((res) => setEmployees({ employees: res })))
      )
  Ekada  ofType(getEmployees) True itee Line no 136 
  code execute ithadhiii.
  => Api Response vachaka pipe anee method lo male map use 
  chysuthunamu a data nii manam epudu dispach chysuthunamu 
  antee store lo store chysuthunamu


## Version
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.
## CONFIGURATION

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

1. We Need TO Go To app.config.ts Folder 
2. And Go To appConfig Class Add 

importProvidersFrom(StoreModule.forRoot({
   Employee:employeeReducer //it should be in array of object formate key Value formate
  }))

importProvidersFrom(EffectsModule.forRoot([employeesEffect])) 

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.