import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productCards } from 'src/app/mock/productCard.mock';
import { productCardModel } from 'src/app/models/productCard.model';
import { cardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  productCard!: productCardModel | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: cardService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.productCard = this.cardService.getDetails(+id);
    }
  }
}
