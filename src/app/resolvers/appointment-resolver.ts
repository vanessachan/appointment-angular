import {Appointment} from "../model/Appointment";
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AppointmentService} from "../service/appointment.service";

export const appointmentResolver:ResolveFn<Appointment>=
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AppointmentService).getAppointment(Number(route.paramMap.get('id')!));
  };
