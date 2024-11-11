import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="display">{{ displayValue }}</div>`,
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  @Input() displayValue: string = '0';
}
