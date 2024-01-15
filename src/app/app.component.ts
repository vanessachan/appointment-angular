import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    AngularFireAuthModule],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointment-angular';
}
