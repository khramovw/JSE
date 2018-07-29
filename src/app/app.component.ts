import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  openFirst;
  openSecond;
  open;

  openOne () {
    this.openFirst = true;
    this.openSecond = false;
    this.open = false;
  }

  openTwo () {
    this.openFirst = false;
    this.openSecond = true;
    this.open = false;
  }

  openAll () {
    this.open = true;
  }

}
