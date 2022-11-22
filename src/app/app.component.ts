import { Component } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';
import { Card } from "./card";
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardGame';
  cardset$!: Card[];
  boardClass = 'board4';
  boardSize = 4
  boardSizes = {
    sizes: [4, 5, 6]
  };
  numberOfPictures = 0;
  constructor(private cardService: CardService) { }
  onClickStartButton(event: Event) {
    let input = event.target as HTMLInputElement
    this.cardService.getCardset(Number(input.value)).subscribe((data: Card[]) => {
        this.cardset$ = data;
        this.numberOfPictures = this.cardset$.length / 2;
    });
  }

}
