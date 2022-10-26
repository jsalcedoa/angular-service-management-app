import { Component, OnInit } from '@angular/core';

import { IconService } from 'carbon-components-angular';
import UserAvatar from '@carbon/icons/es/user--avatar/20';
import Home from '@carbon/icons/es/home/20';
import Portfolio from '@carbon/icons/es/portfolio/20';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-service-management-app';
  isLoading = false;

  constructor(protected iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerAll([UserAvatar, Home, Portfolio]);

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
