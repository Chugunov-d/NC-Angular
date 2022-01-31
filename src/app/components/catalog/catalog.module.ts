import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CardComponent } from '../card/card.component';
import { CartComponent } from '../cart/cart.component';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [CardComponent, CartComponent, CatalogComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CatalogModule],
  exports: [CatalogComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class CatalogModule {}
