import { Component } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  hide = true;
  email="";
  password="";

  constructor(private authService: AuthService) { }

  login(email: string, password: string) {
    this.authService.login(email, password);
  }


}
