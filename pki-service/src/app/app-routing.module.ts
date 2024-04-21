import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  GenerateCertificateComponent
} from "./certificate-management/generate-certificate/generate-certificate.component";
import {AllCertificatesComponent} from "./certificate-management/all-certificates/all-certificates.component";
import {MyCertificatesComponent} from "./certificate-management/my-certificates/my-certificates.component";
import {
  HostCertificateRequestComponent
} from "./certificate-management/host-certificate-request/host-certificate-request.component";

const routes: Routes = [
  { path: 'generateCertificate', component: GenerateCertificateComponent },
  { path: 'allCertificates', component: AllCertificatesComponent },
  { path: 'myCertificates', component: MyCertificatesComponent },
  {path: 'hostCertificateRequest', component: HostCertificateRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
