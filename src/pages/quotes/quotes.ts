import { Component, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';



@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor (private navParams: NavParams,
              private alertCrtl: AlertController) {}

  ngOnInit(){
    this.quoteGroup=this.navParams.data;
  }

  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data;
  // add elvis operator (?) in template to use this approach
  // }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCrtl.create({
      title:'Add quote',
      subTitle: 'Are you sure?',
      message:'Are you sure you want to add the quote?',
      buttons: [{
        text: 'Yes, go ahead',
        handler: () => {
          console.log('OK');
        }
        },
      {
        text: 'No, I changed my mind',
        role: 'cancel',
        handler: () => {
          console.log('Cancelled!');
        }
      }]
    });
    alert.present();
  }

}
