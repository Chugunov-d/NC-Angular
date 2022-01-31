import { Component, Input } from '@angular/core';
import { cardService } from 'src/app/services/card.service';
import { cardsCartService } from 'src/app/services/carts-card.service';
import { productCardModel } from '../../models/productCard.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: productCardModel;
  constructor(private cardService: cardsCartService) {}
  addToCart(): void {
    this.cardService.moveToCart(this.card);
  }
}
