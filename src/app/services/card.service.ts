import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/interfaces/CreditCard';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private firestore: Firestore) { }


  createCard(card: CreditCard) {
    const cardRef = collection(this.firestore, 'CreditCards')
    return addDoc(cardRef, card);
  }

  listCards(): Observable<CreditCard[]> {
    const cardRef = collection(this.firestore, 'CreditCards')
    return collectionData(cardRef, { idField: 'id' }) as Observable<CreditCard[]>
  }

  deleteCard(card: CreditCard) {
    const cardDocRef = doc(this.firestore, `CreditCards/${card.id}`);
    return deleteDoc(cardDocRef);
  }

}
