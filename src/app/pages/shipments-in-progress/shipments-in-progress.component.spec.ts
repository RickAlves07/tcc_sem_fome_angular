import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsInProgressComponent } from './shipments-in-progress.component';

describe('ShipmentsInProgressComponent', () => {
  let component: ShipmentsInProgressComponent;
  let fixture: ComponentFixture<ShipmentsInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
