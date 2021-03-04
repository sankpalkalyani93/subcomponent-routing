import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MyHomeComponent } from "./my-home/my-home.component";
import { VerificationModule } from "./verification/verification.module";

export const ROUTES: Routes = [
  { path: "", component: MyHomeComponent },
  { path: "verification", loadChildren: () => VerificationModule }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [AppComponent, MyHomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
