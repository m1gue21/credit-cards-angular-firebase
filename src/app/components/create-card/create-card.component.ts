import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/interfaces/CreditCard';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private cardService: CardService) {
    this.form = this.fb.group({
      owner: ['', Validators.required],
      number: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expDate: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  async createCard() {
    const CARD: CreditCard = {
      owner: this.form.value.owner,
      number: this.form.value.number,
      expDate: this.form.value.expDate,
      cvv: this.form.value.cvv,
      creationDate: new Date(),
      updatedAt: new Date()
    }

    const response = await this.cardService.createCard(CARD)

    console.log(response)
    this.form.reset();
  }
}
