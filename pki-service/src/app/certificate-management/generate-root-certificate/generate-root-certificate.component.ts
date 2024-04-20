import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";

@Component({
  selector: 'app-generate-root-certificate',
  templateUrl: './generate-root-certificate.component.html',
  styleUrls: ['./generate-root-certificate.component.css']
})
export class GenerateRootCertificateComponent implements OnInit{
  subjectCN: any;
  subjectO: any;
  subjectOU: any;
  subjectCountry: any;
  startDate: any;
  endDate: any;
  user: User | undefined;

  ngOnInit(): void {
    // this.userService.getUserByID().subscribe((res: any) => {
    //   this.user = res;
      // this.subjectO = this.user?.organisation;
      // this.subjectOU = this.user?.unit;
      // this.subjectCountry = this.user?.state;
    // });
  }

  createCertificate() {
    const certificateDTO: any = {
      userID: this.user?.id,
      subjectCN: this.subjectCN,
      subjectO: this.subjectO,
      subjectOU: this.subjectOU,
      subjectCountry: this.subjectCountry,
      startDate: this.startDate,
      endDate: this.endDate,
      selectedAuthority: 'true',
    };

    let startDateMs = Date.parse(this.startDate);
    let endDateMs = Date.parse(this.endDate);

    if (endDateMs < startDateMs || startDateMs < Date.now() - 86400000) {
      window.alert('Wrong date!');
    } else {
      // this.certificateService.createRootCertificate(certificateDTO).subscribe();
    }
  }
}
