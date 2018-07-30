import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


// Services
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-phone-shop',
  templateUrl: './phone-shop.component.html',
  styleUrls: ['./phone-shop.component.css']
})
export class PhoneShopComponent implements OnInit {

  phonelist;
  cart = 0;

  constructor( public phoneservice: PhonesService ) { }

  ngOnInit() {
    this.phonelist = this.phoneservice.getPhones();
    console.log(this.phonelist);
  }

  addToCart ( phone ) {
    this.cart += 1;
    phone.qty -= 1;
  }

}
