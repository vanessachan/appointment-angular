import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {DatePipe, NgForOf} from "@angular/common";
import {RecurrencyMapping} from "../../model/RecurrencyEnum";
import {Appointment} from "../../model/Appointment";
import {Subscription} from "rxjs";
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
   // this.initializeSocketConnection();

    this.refreshList();


  }
  ngOnDestroy() {
    this.disconnectSocket();
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
  // Initializes socket connection
  initializeSocketConnection() {
    this.webSocketApi.connectSocket('message');
  }
  // Receives response from socket connection
  receiveSocketResponse() {
    this.webSocketApi.receiveStatus().subscribe((receivedMessage) => {
      console.log(receivedMessage);
    });
  }

  // Disconnects socket connection
  disconnectSocket() {
    this.webSocketApi.disconnectSocket();
  }

  notify(message: string) {
    this.snackBar.open(message, "It's time!!");
    this.i++;
    //this.snd2.play();

  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
    this.i = 0;
    this.hidden = false;
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


  edit(id: number | undefined) {
    this.router.navigate(['appointment',id])
  }



}
