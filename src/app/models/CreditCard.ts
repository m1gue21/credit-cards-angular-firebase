export class CreditCard {
    id?: string;
    owner: string;
    number: string;
    expDate: string;
    cvv: number;
    creationDate: Date;
    updatedAt: Date;

    constructor(owner: string, number: string, expDate: string, cvv: number) {
        this.owner = owner;
        this.number = number;
        this.expDate = expDate;
        this.cvv = cvv;
        this.creationDate = new Date();
        this.updatedAt = new Date();
    }
}