import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-module',
  templateUrl: './time-module.component.html',
  styleUrls: ['./time-module.component.css']
})
export class TimeModuleComponent implements OnInit {

  dataNav;
  getDateNow;
  getTimeNow;
  state;
  countday;
  x: any = new Date(2018, 5, 1);
  x2: any = new Date(2018, 9, 1);
  oneDay = 24*60*60*1000;
  

  constructor() { }

  ngOnInit() {
    this.istime();
    this.count();
  }

  istime () {
    this.dataNav = new Date();
    this.getTimeNow = this.dataNav.toLocaleString('ru', {hour: 'numeric', minute: 'numeric'});
    this.getDateNow = this.dataNav.toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'});
    this.isstat ();
  }

  isstat () {
    this.state = this.getTimeNow.hour > 21 && this.getTimeNow.hour < 9 ? 'С утра будет завтрак' : 
      this.getTimeNow.hour > 9 && this.getTimeNow.hour < 14 ? 'Не пропустите обед' : 
        'Время близится к ужину';
  }

  count() {
    this.countday = Math.round( Math.abs((this.dataNav - this.x ) / ( this.oneDay )));
  }

}
