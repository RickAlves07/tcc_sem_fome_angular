import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledDonationsComponent } from './scheduled-donations.component';

describe('ScheduledDonationsComponent', () => {
  let component: ScheduledDonationsComponent;
  let fixture: ComponentFixture<ScheduledDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
