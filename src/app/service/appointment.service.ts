import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Appointment} from "../model/Appointment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  url='/appointment';
  constructor(private httpClient:HttpClient) { }

  getAppointments(){
    return this.httpClient.get<any[]>(this.url);
  }

  getAppointment(id:number){
    return this.httpClient.get<Appointment>(this.url+"/"+id);
  }

  saveAppointment(app:Appointment){
    if(app.id!=undefined){
      return this.httpClient.put<Appointment>(this.url, app);
    }
    return this.httpClient.post<Appointment>(this.url, app);
  }

  deleteAppointment(id:number):Observable<any>{

    return this.httpClient.delete(this.url.concat("/"+id));

  }

}
