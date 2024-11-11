import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from '../display/display.component'; 
import { ButtonComponent } from '../button/button.component';
import { CalculatorService } from '../calculator.service'; 

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, DisplayComponent, ButtonComponent],
  template: `
    <section class="calculator">
      <app-display [displayValue]="displayValue"></app-display>
      <div class="button-grid">
        <button *ngFor="let button of buttons" (click)="onButtonClick(button)">
          {{ button }}
        </button>
      </div>
    </section>
  `,
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue = '0';
  buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '=', '+', 'C'];

  constructor(private calculatorService: CalculatorService) {}

  onButtonClick(button: string) {
    this.displayValue = this.calculatorService.processInput(button);
  }
}
