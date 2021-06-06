import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { RootComponent } from "./components/root/root.component";

const routes: Routes = [
  {path: "", component: RootComponent},
  {path: "create-user", component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {

}