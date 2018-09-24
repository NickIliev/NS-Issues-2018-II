import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'localize-test';

  constructor() { }

  ngOnInit() {
    localStorage.setItemObject('test', {a: 1, b: 2});
    const TEST = localStorage.getItem('test');
    console.log('Test2', TEST);
  }
}
