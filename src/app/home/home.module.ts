import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MyCommonModule } from '../common/common.module';
import { HomeRoutingModule } from "./home-routering.module";
import { RootComponent } from './components/root/root.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FloatbarComponent } from './components/floatbar/floatbar.component';
import { CardComponent } from './components/card/card.component';

import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    HomeComponent,
    RootComponent,
    ToolbarComponent,
    FloatbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MyCommonModule,
    HomeRoutingModule,
    MatIconModule,
  ]
})
export class HomeModule { }
