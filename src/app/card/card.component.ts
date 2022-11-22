import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card; //Not nice, fix this
  constructor() {

  }

  getBackgroundImage(item: Card) {
    if (this.card.selected === true) {
       // let backgroundUrl = 'url(assets/img/'+ item.card1 + '.jpg)'
    const backgroundUrl = `url(assets/img/${item.card1}.jpg)`;
    return backgroundUrl;
    } else {
      return '';
    } 
  }

  ngOnInit(): void {
    this.card.selected = false;
  }

}
