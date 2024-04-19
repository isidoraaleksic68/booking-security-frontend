import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GenerateCertificateComponent
} from "./certificate-management/generate-certificate/generate-certificate.component";
import {
  GenerateRootCertificateComponent
} from "./certificate-management/generate-root-certificate/generate-root-certificate.component";
import {AllCertificatesComponent} from "./certificate-management/all-certificates/all-certificates.component";
import {MyCertificatesComponent} from "./certificate-management/my-certificates/my-certificates.component";

const routes: Routes = [
  { path: 'generateCertificate', component: GenerateCertificateComponent },
  { path: 'generateRootCertificate', component: GenerateRootCertificateComponent },
  { path: 'allCertificates', component: AllCertificatesComponent },
  { path: 'myCertificates', component: MyCertificatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
