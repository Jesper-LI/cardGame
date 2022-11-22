import { Component } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { Card } from "./card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardGame';
}
