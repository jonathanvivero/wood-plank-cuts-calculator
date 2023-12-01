import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieceFeedService } from '../../services/piece-feed/piece-feed.service';
import Piece from '../../models/plank/piece-model';
import CalculatorParameters from '../../models/calc-params/calculator-parameters-model';
import { concatMap, fromEvent, takeUntil, tap } from 'rxjs';

enum Orientation {
  LANDSCAPE,
  PORTRAIT
}

@Component({
  selector: 'wpc-wood-cuts-result',
  standalone: true,
  imports: [CommonModule],  
templateUrl: './wood-cut-result.component.html',
  styleUrl: './wood-cut-result.component.sass'
})
export class WoodCutResultComponent implements OnInit, AfterViewInit {

  params = CalculatorParameters.Create();
  pieces: Piece[] = [];  
  @ViewChild("plank", { static: false })
  plankCanvas!: ElementRef;
  canvasOrientation:Orientation = Orientation.LANDSCAPE;

  constructor(private pieceFeedService: PieceFeedService, private el: ElementRef){
    this.pieceFeedService.SubscribeToNewMeasures(
      (value: CalculatorParameters) => this.OnMeasureChange(value), 
      e => this.OnError(e))
  }

  ngOnInit(){}

  ngAfterViewInit(){
    this.ConfigureCanvas();
  }
  
  private GetContext = () => this.plankCanvas.nativeElement.getContext("2d");

  private ConfigureCanvas(){
    const canvasEl: HTMLCanvasElement = this.plankCanvas.nativeElement;
    const cx = this.GetContext();
    if(canvasEl.width < canvasEl.height)
      this.canvasOrientation = Orientation.PORTRAIT;

    const h = canvasEl.height, 
      w = canvasEl.width;
    cx.clearRect(0, 0, w, h);
    cx.strokeStyle='grey';
    cx.lineWidth = 1;
    cx.strokeRect(0,0,w,h);

  }

  draw(startOffsetX:number, startOffsetY:number, endOffsetX:number, endOffsetY:number) {
    const cx = this.GetContext();
    cx.moveTo(startOffsetX, startOffsetY);
    cx.lineTo(endOffsetX, endOffsetY);
    cx.stroke();
  }

  drawRect(startOffsetX:number, startOffsetY:number, endOffsetX:number, endOffsetY:number) {
    const cx = this.GetContext();
    cx.strokeStyle='black';
    cx.lineWidth = 1;
    cx.strokeRect(startOffsetX,startOffsetY,endOffsetX,endOffsetY);

  }

  OnMeasureChange(calculatorParameters: CalculatorParameters){
    this.params = calculatorParameters;
    this.Update();
  }

  OnPieceChanged(pieces: Piece[]){
    this.pieces = pieces;
    this.Update();
  }

  OnError(e: any){
    console.error(e);
  }
  

  Update() {    
    const {Height: height, Width: width} = this.params.plankSize;

    if(height === 0 || width === 0)
      return;
    
    let largerSide =  height;
    let shorterSide = width;
    if (height<width){
      largerSide =  width;
      shorterSide = height;
    }

    if (this.canvasOrientation === Orientation.LANDSCAPE)
      this.drawRect(1,1,largerSide, shorterSide);
    else
      this.drawRect(1,1, shorterSide, largerSide);

    
    console.log(this.pieces, this.params);
  }
}
