import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberInputEvent, InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import CalculatorParameters from '../../models/calc-params/calculator-parameters-model';
import Unit from '../../models/units/unit-model';
import { PieceFeedService } from '../../services/piece-feed/piece-feed.service';


@Component({
  selector: 'wpc-calc-parameters',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumberModule, DropdownModule, InputSwitchModule],
  templateUrl: './calc-parameters.component.html',
  styleUrl: './calc-parameters.component.sass'
})
export class CalcParametersComponent {

  protected params: CalculatorParameters = CalculatorParameters.Create();  
  protected unitList: Unit[] = Unit.CreateDefaultList();

  constructor(private pieceFeedService: PieceFeedService){}

  OnInput(event: InputNumberInputEvent){
    this.OnMeasureChange();
  }
  OnMeasureChange(){
    this.pieceFeedService.MeasuresChanged(this.params);
  }
}
