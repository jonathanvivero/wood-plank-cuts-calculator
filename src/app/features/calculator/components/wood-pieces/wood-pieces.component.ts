import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import Piece from '../../models/plank/piece-model';

@Component({
  selector: 'wpc-wood-pieces',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputNumberModule, FormsModule],
  templateUrl: './wood-pieces.component.html',
  styleUrl: './wood-pieces.component.sass'
})
export class WoodPiecesComponent {
  protected height: number = 0;
  protected width: number = 0;
  protected pieces: Piece[] = [];

  OnAddClick = () => {
    this.pieces.push(Piece.Create(this.height, this.width));
  }
}
