import { Injectable } from '@angular/core';
import { productCards } from '../mock/productCard.mock';
import { productCardModel } from '../models/productCard.model';

@Injectable({ providedIn: 'root' })
export class cardService {
  private card: productCardModel[] = productCards;

  getCards(): productCardModel[] {
    return this.card;
  }

  getDetails(id: number): productCardModel | null {
    const activeCard = this.card.find((item: productCardModel) => {
      return item.id === id;
    });
    return activeCard ? activeCard : null;
  }

  getActiveCard(search: string = ''): productCardModel[] {
    return this.card.filter((item: productCardModel) => {
      return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
