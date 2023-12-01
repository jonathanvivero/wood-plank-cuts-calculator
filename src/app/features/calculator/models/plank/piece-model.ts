export default class Piece {
    private constructor(public Height: number, public Width: number) {}

    static Create = (h:number, w:number) => new Piece(h,w);
}