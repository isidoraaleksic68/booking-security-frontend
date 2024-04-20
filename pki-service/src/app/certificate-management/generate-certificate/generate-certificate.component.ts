import {Component, OnInit} from '@angular/core';
import {CertificateService} from "../../services/certificate.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Certificate} from "../../model/certificate";

@Component({
  selector: 'app-generate-certificate',
  templateUrl: './generate-certificate.component.html',
  styleUrls: ['./generate-certificate.component.css']
})

export class GenerateCertificateComponent implements OnInit{
  certificates!: Certificate[]
  selectedAuthority!: string;
  subjectCN!:string;
  subjectO!: string;
  subjectOU!: string;
  subjectCountry!:string;
  startDate: any;
  endDate: any;
  selectedKeySize!: string;
  selectedEndDate: any;
  selectedStartDate: any;
  selectedST!: string;
  selectedOU!: string;
  selectedO!: string;
  selectedCN!: string;
  selectedTemp: any;
  selectedAlias!: string;
  selectedC!: string;
  selectedUN!: string;

  constructor(
    private certificateService: CertificateService,
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {
    this.certificateService.getCertificatesByUserID().subscribe((res: any) => {
      this.certificates = res;
    });
  }

  findCertificateByAlias(alias: string): Certificate | undefined {
    return this.certificates.find((cert) => cert.alias === alias);
  }

  createCertificate() {
    const certificateDTO: any = {
      aliasIssuer: this.selectedAlias,
      subjectCN: this.subjectCN,
      subjectO: this.subjectO,
      subjectOU: this.subjectOU,
      subjectCountry: this.subjectCountry,
      startDate: this.startDate,
      endDate: this.endDate,
      selectedAuthority: this.selectedAuthority,
    };

    let selectedStartDateMs = this.parseDate(this.selectedStartDate).getTime();
    let startDateMs = Date.parse(this.startDate);
    let endDateMs = Date.parse(this.endDate);
    let selectedEndDateMs = this.parseDate(this.selectedEndDate).getTime();

    if (
      startDateMs > selectedStartDateMs &&
      endDateMs < selectedEndDateMs &&
      startDateMs > Date.now() - 86400000 &&
      startDateMs < selectedEndDateMs &&
      endDateMs > startDateMs
    ) {
      this.certificateService.createCertificate(certificateDTO).subscribe();
    } else {
      window.alert('Wrong date!');
    }
  }

  onSelectionChanged() {
    this.selectedAlias = this.selectedKeySize;
    const selectedCert = this.findCertificateByAlias(this.selectedAlias);

    if (selectedCert) {
      const certSubject = selectedCert.subject;
      const subjectObj: any = {
        C: '',
        ST: '',
        L: '',
        OU: '',
        O: '',
        CN: '',
      };

      certSubject?.split(',').forEach((item: string) => {
        const parts = item.trim().split('=');
        subjectObj[parts[0]] = parts[1];
      });

      this.selectedCN = subjectObj.CN; // access the CN value
      this.selectedC = subjectObj.C;
      this.selectedEndDate = this.findCertificateByAlias(
        this.selectedKeySize
      )?.endDate;
      this.selectedStartDate = this.findCertificateByAlias(
        this.selectedKeySize
      )?.startDate;
      this.selectedO = subjectObj.O;
      this.selectedOU = subjectObj.OU;
      this.selectedUN = subjectObj.UN;
      this.selectedST = subjectObj.ST;
      this.selectedTemp = this.findCertificateByAlias(
        this.selectedKeySize
      )?.type;
    }
  }
  parseDate(dateStr: string): Date {
    const months: { [key: string]: number } = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    const [dayOfWeek, monthStr, dayOfMonth, time, timeZone, year] =
      dateStr.split(' ');
    const [hours, minutes, seconds] = time.split(':');

    const date = new Date();
    date.setUTCFullYear(Number(year));
    date.setUTCMonth(months[monthStr]);
    date.setUTCDate(Number(dayOfMonth));
    date.setUTCHours(Number(hours));
    date.setUTCMinutes(Number(minutes));
    date.setUTCSeconds(Number(seconds));

    return date;
  }
}
