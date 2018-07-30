import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  phones;

  constructor() { }

  getPhones () {
    return this.phones = [
      {
        name: 'Apple iPhone',
        model: 'X',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum labore tempore.',
        qty: 1,
        img: 'https://www.euronics.ee/UserFiles/Products/Images/175433-iphonex-spg-3.png'
      },
      {
        name: 'Apple iPhone',
        model: '8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum labore tempore.',
        qty: 3,
        img: 'https://www.euronics.lv/UserFiles/Products/Images/172623-iphone8-gold-2.png'
      },
      {
        name: 'Google Nexus',
        model: '5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum labore tempore.',
        qty: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/4162aIRE98L.jpg'
      },
      {
        name: 'Google Pixel2',
        model: 'XL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum labore tempore.',
        qty: 1, img: 'http://cdn.shopify.com/s/files/1/2089/6571/products/Pixel2-XL-Clear-Black-01_grande.jpg?v=1508641918'
      },
      {
        name: 'Apple iPhone',
        model: 'SE2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum labore tempore.',
        qty: 0,
        img: 'https://cdn.macrumors.com/article-new/2016/03/iPhone-SE-Front-Back.jpg'
      }
    ];
  }
}
