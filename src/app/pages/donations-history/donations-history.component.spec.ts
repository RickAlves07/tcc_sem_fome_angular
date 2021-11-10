import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsHistoryComponent } from './donations-history.component';

describe('DonationsHistoryComponent', () => {
  let component: DonationsHistoryComponent;
  let fixture: ComponentFixture<DonationsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
