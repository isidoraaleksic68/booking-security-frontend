import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateRootCertificateComponent } from './generate-root-certificate.component';

describe('GenerateRootCertificateComponent', () => {
  let component: GenerateRootCertificateComponent;
  let fixture: ComponentFixture<GenerateRootCertificateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateRootCertificateComponent]
    });
    fixture = TestBed.createComponent(GenerateRootCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
