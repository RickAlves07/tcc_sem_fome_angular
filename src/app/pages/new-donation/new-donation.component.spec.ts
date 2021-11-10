import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDonationComponent } from './new-donation.component';

describe('NewDonationComponent', () => {
  let component: NewDonationComponent;
  let fixture: ComponentFixture<NewDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
