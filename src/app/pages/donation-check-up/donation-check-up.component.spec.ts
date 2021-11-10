import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCheckUpComponent } from './donation-check-up.component';

describe('DonationCheckUpComponent', () => {
  let component: DonationCheckUpComponent;
  let fixture: ComponentFixture<DonationCheckUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationCheckUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCheckUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
