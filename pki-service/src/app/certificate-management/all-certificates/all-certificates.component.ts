import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-certificates',
  templateUrl: './all-certificates.component.html',
  styleUrls: ['./all-certificates.component.css']
})

export class AllCertificatesComponent implements OnInit{
  currentPage: number = 1;
  itemsPerPage: number = 5;
  certificates = [
    {
      type: 'Root CA1',
      issuer: 'Example Root CA',
      subject: 'Example Root CA',
      startDate: '2022-01-01',
      endDate: '2030-01-01',
      alias: 'my root ca',
      isRevoked: false
    },
    {
      type: 'Intermediate CA2',
      issuer: 'Example Root CA',
      subject: 'Example Intermediate CA',
      startDate: '2022-01-01',
      endDate: '2025-01-01',
      alias: 'intermediate ca',
      isRevoked: false
    },
    {
      type: 'End-entity3',
      issuer: 'Example Intermediate CA',
      subject: 'Example End-entity Certificate',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      alias: 'end-entity cert',
      isRevoked: true
    },
    {
      type: 'Root CA4',
      issuer: 'Example Root CA',
      subject: 'Example Root CA',
      startDate: '2022-01-01',
      endDate: '2030-01-01',
      alias: 'my root ca',
      isRevoked: false
    },
    {
      type: 'Intermediate CA5',
      issuer: 'Example Root CA',
      subject: 'Example Intermediate CA',
      startDate: '2022-01-01',
      endDate: '2025-01-01',
      alias: 'intermediate ca',
      isRevoked: false
    },
    {
      type: 'End-entity6',
      issuer: 'Example Intermediate CA',
      subject: 'Example End-entity Certificate',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      alias: 'end-entity cert',
      isRevoked: true
    },{
      type: 'Root CA7',
      issuer: 'Example Root CA',
      subject: 'Example Root CA',
      startDate: '2022-01-01',
      endDate: '2030-01-01',
      alias: 'my root ca',
      isRevoked: false
    },
    {
      type: 'Intermediate CA8',
      issuer: 'Example Root CA',
      subject: 'Example Intermediate CA',
      startDate: '2022-01-01',
      endDate: '2025-01-01',
      alias: 'intermediate ca',
      isRevoked: false
    },
    {
      type: 'End-entity9',
      issuer: 'Example Intermediate CA',
      subject: 'Example End-entity Certificate',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      alias: 'end-entity cert',
      isRevoked: true
    },{
      type: 'Root CA10',
      issuer: 'Example Root CA',
      subject: 'Example Root CA',
      startDate: '2022-01-01',
      endDate: '2030-01-01',
      alias: 'my root ca',
      isRevoked: false
    },
    {
      type: 'Intermediate CA11',
      issuer: 'Example Root CA',
      subject: 'Example Intermediate CA',
      startDate: '2022-01-01',
      endDate: '2025-01-01',
      alias: 'intermediate ca',
      isRevoked: false
    },
    {
      type: 'End-entity12',
      issuer: 'Example Intermediate CA',
      subject: 'Example End-entity Certificate',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      alias: 'end-entity cert',
      isRevoked: true
    },{
      type: 'Root CA13',
      issuer: 'Example Root CA',
      subject: 'Example Root CA',
      startDate: '2022-01-01',
      endDate: '2030-01-01',
      alias: 'my root ca',
      isRevoked: false
    },
    {
      type: 'Intermediate CA14',
      issuer: 'Example Root CA',
      subject: 'Example Intermediate CA',
      startDate: '2022-01-01',
      endDate: '2025-01-01',
      alias: 'intermediate ca',
      isRevoked: false
    },
    {
      type: 'End-entity15',
      issuer: 'Example Intermediate CA',
      subject: 'Example End-entity Certificate',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      alias: 'end-entity cert',
      isRevoked: true
    }
  ];

  revokeCertificate(alias: string) {

  }

  validateCertificate(alias: string) {

  }

  saveCertificate(alias: string) {

  }

  ngOnInit(): void {
  }

  get paginatedCertificates(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.certificates.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  getPages(): number[] {
    const totalItems = this.certificates.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

}
