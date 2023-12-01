import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from '../../components/calculator/calculator.component';

@Component({
  selector: 'wpc-calculator-page',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './calculator-page.component.html',
  styleUrl: './calculator-page.component.sass'
})
export class CalculatorPageComponent {

}
