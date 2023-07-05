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

  async deleteCard(card: CreditCard) {
    try {
      const response = await this.cardService.deleteCard(card);
      console.log(response);
    } catch (error) {
      console.error('Error deleting card:', error);
      // Aquí puedes agregar tu lógica de manejo de errores, como mostrar un mensaje al usuario o tomar alguna acción adicional.
    }
  }


}
