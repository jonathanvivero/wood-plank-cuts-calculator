import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcParametersComponent } from '../calc-parameters/calc-parameters.component';
import { WoodCutResultComponent } from '../wood-cut-result/wood-cut-result.component';
import { WoodPiecesComponent } from '../wood-pieces/wood-pieces.component';

@Component({
  selector: 'wpc-calculator',
  standalone: true,
  imports: [CommonModule, CalcParametersComponent, WoodCutResultComponent, WoodPiecesComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.sass'
})
export class CalculatorComponent {

}
