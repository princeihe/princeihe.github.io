import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CalculatorComponent],  
  template: `
    <app-calculator></app-calculator>  <!-- Use the app-calculator tag -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
