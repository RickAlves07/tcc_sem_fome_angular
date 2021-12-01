import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsInProgressComponent } from './donations-in-progress.component';

describe('DonationsInProgressComponent', () => {
  let component: DonationsInProgressComponent;
  let fixture: ComponentFixture<DonationsInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
