import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTimelineComponent } from './shipment-timeline.component';

describe('ShipmentTimelineComponent', () => {
  let component: ShipmentTimelineComponent;
  let fixture: ComponentFixture<ShipmentTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
