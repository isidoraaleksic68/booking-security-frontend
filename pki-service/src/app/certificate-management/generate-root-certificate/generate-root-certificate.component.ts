import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "../../model/user";
import { CertificateService } from "../../services/certificate.service";
import { UserService } from "../../services/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-generate-root-certificate',
  templateUrl: './generate-root-certificate.component.html',
  styleUrls: ['./generate-root-certificate.component.css']
})
export class GenerateRootCertificateComponent implements OnInit {
  certificateForm!: FormGroup;
  user: User | undefined;

  constructor(private formBuilder: FormBuilder, private certificateService: CertificateService,
              private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.certificateForm = this.formBuilder.group({
      subjectCN: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.userService.getUserByID().subscribe((res: any) => {
      this.user = res;
      this.certificateForm?.get('subjectO')?.setValue(this.user?.organisation);
      this.certificateForm?.get('subjectOU')?.setValue(this.user?.unit);
      this.certificateForm?.get('subjectCountry')?.setValue(this.user?.state);
    });
  }

  createCertificate() {
    if (this.certificateForm?.invalid) {
      return;
    }

    var certificateDTO = {
      userID: this.user?.id,
      subjectCN: this.certificateForm?.get('subjectCN')?.value,
      subjectO: this.certificateForm?.get('subjectO')?.value,
      subjectOU: this.certificateForm?.get('subjectOU')?.value,
      subjectCountry: this.certificateForm?.get('subjectCountry')?.value,
      startDate: this.certificateForm?.get('startDate')?.value,
      endDate: this.certificateForm?.get('endDate')?.value,
      selectedAuthority: 'true',
    };

    let startDateMs = Date.parse(this.certificateForm?.get('startDate')?.value);
    let endDateMs = Date.parse(this.certificateForm?.get('endDate')?.value);

    if (endDateMs < startDateMs || startDateMs < Date.now() - 86400000) {
      this.snackBar.open("Invalid date.", 'Close', {
        duration: 3000,
      });
    } else {
      this.certificateService.createRootCertificate(certificateDTO).subscribe(() => {
        this.snackBar.open("Certificate is created successfully.", 'Close', {
          duration: 3000,
        });
      });
    }
  }
}
