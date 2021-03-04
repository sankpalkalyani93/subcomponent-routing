import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { VerificationComponent } from "./verification.component";
import { MyLoginComponent } from "./my-login/my-login.component";
import { MyRegisterComponent } from "./my-register/my-register.component";

export const ROUTES: Routes = [
  { path: "", redirectTo: "my-login" },
  {
    path: "",
    component: VerificationComponent,
    children: [
      { path: "my-login", component: MyLoginComponent },
      { path: "my-register", component: MyRegisterComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [VerificationComponent, MyLoginComponent, MyRegisterComponent]
})
export class VerificationModule {}
