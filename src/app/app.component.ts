import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    // templateUrl: './app.component.html',
    template: `
    <!-- // property binding
  <input type="text" [value]="title">
  <app-home [pageName]="title"></app-home>  -->
    <ul>
      <li *ngFor="let name of names" >{{name}}</li>
    </ul>


  `,
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'proj1';
  names: string[] = ["Robert-Plant", "Steven-Tyler", "Jokull Julisson","Fatih Akpiyal" ];
}
