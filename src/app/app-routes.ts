import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAppointmentComponent} from "./component/create-appointment/create-appointment.component";
import {ListAppointmentComponent} from "./component/list-appointment/list-appointment.component";

export const routes: Routes = [
  {path:'', component:ListAppointmentComponent},
  {path:'create', component:CreateAppointmentComponent}

];

