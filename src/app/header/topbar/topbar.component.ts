import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  hasHamburger = false;
  // expanded = true;

  constructor() { }

  ngOnInit(): void {
  }

  expanded(ev: Event): void {
    console.log(ev);
  }

}
