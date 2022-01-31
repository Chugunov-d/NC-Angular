import { Injectable } from '@angular/core';
import { productCardModel } from '../models/productCard.model';

@Injectable({
  providedIn: 'root',
})
export class cardsCartService {
  private boughtCard: productCardModel[] = [];

  moveToCart(productCards: productCardModel): void {
    this.boughtCard.push({ ...productCards, buy: true });
  }

  getCartData(): productCardModel[] {
    return this.boughtCard;
  }
}
