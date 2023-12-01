import PlankSize from './../plank/plank-size-model';
import CalculatorCutOptions from './calculatorx-cut-options-model';

export default class CalculatorParameters {
    private constructor(
        public plankSize:PlankSize, 
        public calculatorCutOptions: CalculatorCutOptions ){

    }

    static Create = () => new CalculatorParameters(
        PlankSize.Create(), 
        CalculatorCutOptions.Create());
}