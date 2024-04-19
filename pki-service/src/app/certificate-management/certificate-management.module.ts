import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateCertificateComponent } from './generate-certificate/generate-certificate.component';
import { GenerateRootCertificateComponent } from './generate-root-certificate/generate-root-certificate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllCertificatesComponent } from './all-certificates/all-certificates.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    GenerateCertificateComponent,
    GenerateRootCertificateComponent,
    NavbarComponent,
    AllCertificatesComponent,
    MyCertificatesComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    GenerateCertificateComponent,
    GenerateRootCertificateComponent,
    NavbarComponent,
    AllCertificatesComponent,
    MyCertificatesComponent
  ]
})
export class CertificateManagementModule { }
