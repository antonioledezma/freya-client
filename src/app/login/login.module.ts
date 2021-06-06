import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RootComponent } from './components/root/root.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MyCommonModule } from '../common/common.module';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RootComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    MyCommonModule,
    LoginRoutingModule,
  ]
})

export class LoginModule {
  
}
