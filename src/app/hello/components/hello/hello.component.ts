import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  hello = [
    'Hello World',
    'Привет Мир',
    'Привіт Світ',
    'Hola Mundo',
    'Bonjour le monde',
];

  constructor() { }

  ngOnInit() {
  }

}
