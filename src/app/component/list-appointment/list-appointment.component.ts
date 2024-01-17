import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {DatePipe, NgForOf} from "@angular/common";
import {RecurrencyMapping} from "../../model/RecurrencyEnum";
import {Appointment} from "../../model/Appointment";
import {interval, Subscription} from "rxjs";
import {Router, RouterLink} from "@angular/router";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {AppointmentService} from "../../service/appointment.service";
import {WebSocketApi} from "../../websocket/web-socket-api";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {IconSvgBell} from "../../icon/icon-svg-bell";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-list-appointment',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatCardModule,
    DatePipe,
    MatButtonModule,
    NgForOf,
    MatBadgeModule,
    MatIconModule,
    IconSvgBell,
    MatToolbarModule,
    MatSnackBarModule,
    RouterLink

  ],
  templateUrl: './list-appointment.component.html',
  styleUrl: './list-appointment.component.css'
})
export class ListAppointmentComponent implements OnInit{

  hidden = false;


  public RecurrenciesMapping = RecurrencyMapping;
  i: number = 0;
  appointments: Appointment[] = [];
  panelOpenState: boolean = false;
  errorMsg = "";
  durationInSeconds = 5;
  private mySub: Subscription | undefined;
  private names: string[] = [];

  ngOnInit(): void {
    this.refreshList();
    console.log("ngOinit"+"inicio");
    this.webSocketApi._connect();

    this.webSocketApi.onMessage.subscribe(message => {
      this.notify(message);
      this.names.push(message);
    });

    // this.mySub = interval(8000).subscribe((func => {
    //   if (!this.hidden && this.i > 0) {
    //     console.log("tam interval"+this.names.length);
    //
    //     let name = this.names.join(', ')
    //
    //     this.notify(name);
    //
    //   }
    // }))

    console.log("ngOinit"+"fim");


  }


  constructor(private appointmentService: AppointmentService,
              private snackBar: MatSnackBar,
              private webSocketApi: WebSocketApi,
              private router:Router
  ) {
  }

  refreshList() {

    this.appointmentService.getAppointments().subscribe(value => this.appointments = value);
  }


  notify(message: string) {
    this.snackBar.open(message, "It's time!!");
    this.i++;
    //this.snd2.play();

  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    this.i = 0;
   // this.hidden = false;
    this.snackBar.ngOnDestroy()
    this.names = [];
  }

  delete(id: number | undefined) {
    if (id != undefined) {
      this.appointmentService.deleteAppointment(id).subscribe(() => {
          this.appointments = this.appointments.filter(app => app.id != id);
        }
      );
    }
  }

}
