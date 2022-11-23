import { Injectable } from '@angular/core';
import { CardService } from './services/card.service';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class GameplayService {

  constructor(private cardService:CardService) { }

  handleMoves(card:Card) {
    console.log(card);
    
  }
}
