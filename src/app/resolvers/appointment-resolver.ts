import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {Appointment} from "../model/Appointment";
import {inject} from "@angular/core";
import {AppointmentService} from "../service/appointment.service";

export const appointmentCreateResolver:ResolveFn<Appointment>=
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return new Appointment();
  };

export const appointmentEditResolver:ResolveFn<Appointment>=
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AppointmentService).getAppointment(parseInt(route.paramMap.get('id')!));
  };

