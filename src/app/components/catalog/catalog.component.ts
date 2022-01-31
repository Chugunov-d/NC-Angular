import { Component, OnInit } from '@angular/core';
import { productCardModel } from '../../models/productCard.model';
import { cardService } from 'src/app/services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  catalog: productCardModel[] = [];

  constructor(
    private cardService: cardService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.catalog = this.cardService.getCards();
    this.activatedRouter.queryParamMap.subscribe((params) => {
      const search = params.get('search') || '';
      this.catalog = this.cardService.getActiveCard(search);
    });
  }
}

//   Bought(id: number): void {
//     const boughtCard = this.catalog.find((productCard) => {
//       return productCard.id === id;
//     });
//     const todo = this.catalog.find((item) => {
//       return item.id === id;
//     });
//     if (todo) {
//       console.log(`Task '${todo.price}' is done`);
//     }
//     if (boughtCard) {
//       this.cardService.moveToArchive(boughtCard);
//     }
//   }
// }
