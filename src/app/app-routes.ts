import {CreateAppointmentComponent} from "./component/create-appointment/create-appointment.component";
import {ListAppointmentComponent} from "./component/list-appointment/list-appointment.component";
import {appointmentCreateResolver, appointmentEditResolver} from "./resolvers/appointment-resolver";
import {Routes} from "@angular/router";



export const routes: Routes = [
  {path:'', component:ListAppointmentComponent},
  {path:'create', component:CreateAppointmentComponent, resolve:{appointment:appointmentCreateResolver}},
  { path:'appointment/:id', component:CreateAppointmentComponent, resolve:{appointment:appointmentEditResolver}}
];

