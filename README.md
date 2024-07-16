# NGRX Overview

NGRX is a framework for building reactive applications in Angular, inspired by Redux. It's particularly useful for managing complex component relationships and state management in large applications.

## Why NGRX?

When you have various types of relationships between components, transferring data can become complex and time-consuming. Component communication using traditional methods can be tedious and require a lot of logic. NGRX simplifies this by using a centralized store to manage state, allowing easy data sharing between components via the `store.select("")` method.

## Installation

To install NGRX, use the following commands:

```bash
ng add @ngrx/store
ng add @ngrx/effects
```

- `ng add @ngrx/store`: This creates the NGRX store and implements some automatic imports.
- `ng add @ngrx/effects`: This sets up HTTP actions and implements some automatic imports.

## Predefined Methods

### Store

The store holds the final data.

**Telugu Format:** Store lo manam Data ni store chysukutamuu and avasaram unapudu a component ki iyana easy ga share chyachu.

### Action

An action takes `type` and `payload`. It can be defined using `props<{}>`, a generic type.

**Telugu Format:** E action function em chysuthadhi anteee type and payload return chysidhi.

### Reducer

A reducer is a function that takes an action and its payload, performing operations like add, delete, and update. Use `store.dispatch(updatename())` to call an action.

**Telugu Format:** Reducer kuda oka function aaa. E function action function lonichi type, payload tesukoni a type ki thagatugaa action perform chysee logic rasukutamu.

### Effects

Effects are used to update store data from an API call.

**Telugu Format:** Manam action ni dispatch chysnapudu like ela: `store.dispatch(getusers())`. Ekada em ithadhi antee action reducer kadiki podhu, createEffects effect kadiki pothadhi. Ekada manam male reducer ki map chyssetatuu manam logic radukovale.

## Creating Action, Reducer, Store, and Effects

Use the following imports to create these methods:

```typescript
import { createAction, props } from "@ngrx/store";
import { createReducer, on } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
```

### Effects Example Code Explanation

```typescript
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EmployeesCrudeService } from '../../Services/employees-crude.service';
import { getEmployees, setEmployees } from '../Actions/EmployeeAction';

@Injectable()
export class EmployeesEffect {
  constructor(
    private actions: Actions,
    private empService: EmployeesCrudeService
  ) {}

  FetchEmployees = createEffect(() =>
    this.actions.pipe(
      ofType(getEmployees),
      mergeMap(() =>
        this.empService.getData()
          .pipe(map((res) => setEmployees({ employees: res })))
      )
    )
  );
}
```

### Steps Explained

1. **Step 1:** Use `@Injectable()` to enable dependency injection, allowing the class to work like a service file.
   
   **Telugu Format:** Apudu itee manam `@Injectable` use chysathamoo, apudu mana class oka service file laga work chysidhi.

2. **Step 2:** Inject dependencies in the constructor.
   
   ```typescript
   constructor(private actions: Actions, private empService: EmployeesCrudeService) {}
   ```
   
   - `Actions`: Emits actions as an Observable.
   
   **Telugu Format:** Ekada e Action Em Chysuthudhi antee ngrx lo manam action create chysidhi ekada adhi Observable Formate lo emit chysidhi.
   
   - `EmployeesCrudeService()`: Service file to handle API calls.

3. **Step 3:** Use `createEffect()` to define effects.
   
   **Telugu Format:** `createEffect()` function lopala manam another call back function kuda rayachu function inside function. Andulo manam logic rasthamu.

   ```typescript
   createEffect(
     () =>
       this.actions.pipe(
         ofType(getEmployees),
         mergeMap(() =>
           this.empService.getData()
             .pipe(map((res) => setEmployees({ employees: res })))
         )
       )
   );
   ```

4. **Step 4:** Explanation of effect logic.
   
   ```typescript
   this.actions.pipe(
     ofType(getEmployees),
     mergeMap(() =>
       this.empService.getData()
         .pipe(map((res) => setEmployees({ employees: res })))
     )
   );
   ```
   
   - **Line 135:** Modify the action observable using `pipe`.
   
   **Telugu Format:** Ekad action anee Observable em emit chysuthudhi antee mana Application lo create chyana actions anii ekada amit chysuthudhi.
   
   - **Line 136:** `ofType(getEmployees)` checks for matching actions and triggers API calls.

   **Telugu Format:** Ekada ofType em chysuthudhi antee manam dispatch chysina action and `getEmployees` anee action two match itee nee manaki API call pothadhi.

   - **Lines 136-137:** On API response, use `pipe` and `map` to dispatch another action and store data.

   **Telugu Format:** Ekada `ofType(getEmployees)` true itee line no 136 code execute ithadhi. Api response vachaka `pipe` anee method lo male `map` use chysuthunamu a data nii manam epudu dispatch chysuthunamu antee store lo store chysuthunamu.

## Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Configuration

To generate new components and other elements, use:

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Build Configuration

1. Go to `app.config.ts` folder.
2. In the `appConfig` class, add:

```typescript
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from './path-to-reducer';
import { employeesEffect } from './path-to-effect';

importProvidersFrom(StoreModule.forRoot({
   Employee: employeeReducer
}));

importProvidersFrom(EffectsModule.forRoot([employeesEffect]));
```

## Running End-to-End Tests

Run `ng e2e` to execute end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

 