import {Component, Input, OnInit} from '@angular/core';
import {RecurrencyEnum, RecurrencyMapping} from "../../model/RecurrencyEnum";
import {Appointment} from "../../model/Appointment";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: 'app-create-appointment',
  standalone: true,
  templateUrl: './create-appointment.component.html',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    KeyValuePipe,
    MatButtonModule,
    RouterLink,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  public RecurrenciesMapping = RecurrencyMapping;
  @Input()
  appointment: Appointment=new Appointment();

  ngOnInit(): void {


  }

  constructor(private appointmentService: AppointmentService,private router: Router,private activatedRoute: ActivatedRoute){

  }


  save(appointment: Appointment) {
    this.appointmentService.saveAppointment(appointment).subscribe(app => {
      this.router.navigate(['']);
    });
  }


  protected readonly RecurrencyEnum = RecurrencyEnum;
}
