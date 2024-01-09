import {Component, OnInit} from '@angular/core';
import {RecurrencyEnum, RecurrencyMapping} from "../../model/RecurrencyEnum";
import {Appointment} from "../../model/Appointment";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {KeyValuePipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-appointment',
  standalone: true,
  templateUrl: './appointment.component.html',
  imports: [
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule,
    KeyValuePipe,
    MatButtonModule,
    RouterLink
  ],
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{

  public RecurrenciesMapping = RecurrencyMapping;
  appointments: Appointment[] = [];
  appointment=new Appointment();

  ngOnInit(): void {
  }


  save(appointment: Appointment) {
    //this.appointmentService.saveAppointment(appointment).subscribe(app => {
    //  this.refreshList();
   // });
  }


  protected readonly RecurrencyEnum = RecurrencyEnum;
}
