import {CreateAppointmentComponent} from "./component/create-appointment/create-appointment.component";
import {ListAppointmentComponent} from "./component/list-appointment/list-appointment.component";
import {appointmentCreateResolver, appointmentEditResolver} from "./resolvers/appointment-resolver";
import {Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";



export const routes: Routes = [
  {path:'list', component:ListAppointmentComponent},
  {path:'create', component:CreateAppointmentComponent, resolve:{appointment:appointmentCreateResolver}},
  { path:'appointment/:id', component:CreateAppointmentComponent, resolve:{appointment:appointmentEditResolver}},
  { path:'', component:LoginComponent},

];

