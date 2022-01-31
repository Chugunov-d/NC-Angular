import { Component, OnInit } from '@angular/core';
import { productCards } from 'src/app/mock/productCard.mock';
import { productCardModel } from 'src/app/models/productCard.model';
import { cardsCartService } from 'src/app/services/carts-card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  catalog: productCardModel[] = productCards;
  cartData: productCardModel[] = [];
  constructor(private CartService: cardsCartService) {}

  ngOnInit(): void {
    this.cartData = this.CartService.getCartData();
  }
}
