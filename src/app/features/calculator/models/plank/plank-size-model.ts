export default class PlankSize {
    private constructor(
        public Height: number, 
        public Width: number,
        public Thickness: number
        ){}

    static Create = () => new PlankSize(0,0,0);
    
}