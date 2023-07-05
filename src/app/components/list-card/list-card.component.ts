import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { CreditCard } from 'src/app/interfaces/CreditCard';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  cards: CreditCard[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.listCards().subscribe(cards => {
      this.cards = cards
      console.log(this.cards)
    })
  }

}
