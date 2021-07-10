import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ThemeService } from './services/utils/theme.service';
import { ModalService } from './services/modals/implements/modal.service';


@NgModule({
  declarations: [
    ButtonComponent,
	  InputComponent,
	  PageNotFoundComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    InputComponent,
	  ButtonComponent,
	  PageNotFoundComponent
  ],
  providers: [
    ThemeService,
    ModalService
  ]
})

export class MyCommonModule {

}