import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cardsJson = 'assets/cards.json';
  constructor(private http: HttpClient) {  }

  getCardset(fieldsize: number): Observable<Card[]> {
    return this.http
    .get<Card[]>(this.cardsJson)
    .pipe(tap(event => this.createShuffledSet(fieldsize, event)));
  }

  private shuffleArray(sourceArray: Card[]) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
      const j = i + Math.floor(Math.random() * (sourceArray.length - i));
      const temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }
  private createShuffledSet(fieldsize: number, cardSet: Card[]) {
    let myCards = this.shuffleArray(cardSet);
    const numberOfPictures = Math.floor(Math.pow(fieldsize, 2) / 2);
    myCards = myCards.slice(0, numberOfPictures);
    const completeDeck: Card[] = [];
    myCards.forEach(element => {
      completeDeck.push(new Card(element.set, element.card1, ''));
      completeDeck.push(new Card(element.set, '' , element.card2));
    });
    return this.shuffleArray(completeDeck);
  }
}
