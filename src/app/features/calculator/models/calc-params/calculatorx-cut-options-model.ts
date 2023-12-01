export default class CalculatorCutOptions {
    private constructor(
        public SawBladeThikness: number,
        public CutAlwaysSplitPlank: boolean,
        public Unit: string){
    }

    static Create = () => new CalculatorCutOptions(0, true,'mm');


}