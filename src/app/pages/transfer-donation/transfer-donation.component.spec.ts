import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDonationComponent } from './transfer-donation.component';

describe('TransferDonationComponent', () => {
  let component: TransferDonationComponent;
  let fixture: ComponentFixture<TransferDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
