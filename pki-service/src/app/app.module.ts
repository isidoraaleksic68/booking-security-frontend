import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CertificateManagementModule} from "./certificate-management/certificate-management.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CertificateManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
