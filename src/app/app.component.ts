import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ThemeService } from './common/services/utils/theme.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {

  }

  ngOnInit() {
    this.themeService.theme = 'dark';
  }
}