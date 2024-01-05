import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template:`

  <h1>{{pageName}}</h1>
  
  
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() pageName: string;

}
