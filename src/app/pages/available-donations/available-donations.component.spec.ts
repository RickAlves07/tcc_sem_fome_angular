import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableDonationsComponent } from './available-donations.component';

describe('AvailableDonationsComponent', () => {
  let component: AvailableDonationsComponent;
  let fixture: ComponentFixture<AvailableDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
