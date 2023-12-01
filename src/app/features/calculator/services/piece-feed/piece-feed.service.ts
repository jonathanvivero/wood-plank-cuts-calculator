import { Injectable } from '@angular/core';
import { PartialObserver, Subject, Subscription } from 'rxjs';
import Piece from '../../models/plank/piece-model';
import CalculatorParameters from '../../models/calc-params/calculator-parameters-model';

@Injectable({
  providedIn: 'root'
})
export class PieceFeedService {

  private pieceSubject = new Subject<Piece[]>();
  private measuresSubject = new Subject<CalculatorParameters>();

  constructor() { 
  }

  public SubscribeToNewPieces(next: ((value: Piece[]) => void), error: ((e: any) => void), ): Subscription {
        
    const ob: PartialObserver<Piece[]> =  {
      next: next, 
      error: error, 
      complete: () => {}
    };
    
    return this.pieceSubject
      .subscribe(ob);
  }

  public SubscribeToNewMeasures(next: ((value: CalculatorParameters) => void), error: ((e: any) => void), ): Subscription {
    
    const ob: PartialObserver<CalculatorParameters> = {
      next: next, 
      error: error, 
      complete: () => {}
    };

    return this.measuresSubject
      .subscribe(ob);
  }

  public MeasuresChanged(measures: CalculatorParameters) {
    this.measuresSubject.next(measures);
  }

  public PiecesChanged(pieces: Piece[]) {
    this.pieceSubject.next(pieces);
  }

  public Close(ob: Subscription) {
    ob.unsubscribe();        
  }
  

}
