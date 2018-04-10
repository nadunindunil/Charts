import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { AppRoutes } from "./app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { AppNavbarComponent } from "./common/app-navbar/app-navbar.component";
import { HomeComponent } from "./views/home/home.component";
import { UsersService } from "./services/users.service";

@NgModule({
  declarations: [AppComponent, AppNavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutes,
    NgxChartsModule,
    BrowserAnimationsModule ,
    HttpClientModule
  ],
  providers: [UsersService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
