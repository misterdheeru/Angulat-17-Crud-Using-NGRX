import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
 
import { EmployeeEffect } from './STATE-MANAGEMENT/EFFECTS/Employee.Effects';
import { employeesRedusers } from './STATE-MANAGEMENT/REDUCERS/Employees.Reducers';
 
 

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), provideStore(), provideEffects(),importProvidersFrom(StoreModule.forRoot({
    STUDENTS:employeesRedusers
   })) , importProvidersFrom(EffectsModule.forRoot([EmployeeEffect])) ] 
};
