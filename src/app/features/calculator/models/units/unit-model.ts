export default class Unit {
    private constructor(public Name: string, public Value: string){

    }

    static Create = (name:string, value: string) => new Unit(name, value);
    
    static CreateDefaultList = () => [
            Unit.Create('Milimeters','mm'),
            Unit.Create('Centimeters','cm'),
            Unit.Create('Inches','in')        
        ];
}