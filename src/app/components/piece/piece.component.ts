import { Component, Input, OnInit } from '@angular/core';
import {
  initialGame,
  initialGameInterface,
} from 'src/config/initialGame.config';
import { piecesImages } from 'src/config/piecesImages.config';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css'],
})
export class PieceComponent implements OnInit {
  @Input() location!: string;
  imageSource!: string;
  isPiecePlaced: boolean = false;
  gameSetup: initialGameInterface = initialGame;

  constructor() {}

  ngOnInit(): void {
    const piecePlaced =
      this.gameSetup[this.location as keyof typeof this.gameSetup];

    if (piecePlaced !== undefined) {
      this.isPiecePlaced = true;
      this.imageSource = piecesImages[piecePlaced as keyof typeof piecesImages];
    }
  }
}
