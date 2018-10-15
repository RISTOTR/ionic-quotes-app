import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesServices } from '../../services/quotes';
import { QuotePage } from '../quote/quote';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
 
  quotes: Quote[];

  constructor (private quotesServices: QuotesServices,
              private modalCtrl: ModalController) {

  }

ionViewWillEnter() {
  this.quotes=this.quotesServices.getFavoritesQuotes();
}

onViewQuote(quote:Quote){
  const modal = this.modalCtrl.create(QuotePage, quote);
  modal.present();
  modal.onDidDismiss((remove: boolean) => {

  });
}

}
