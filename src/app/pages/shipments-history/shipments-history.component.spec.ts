import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsHistoryComponent } from './shipments-history.component';

describe('ShipmentsHistoryComponent', () => {
  let component: ShipmentsHistoryComponent;
  let fixture: ComponentFixture<ShipmentsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
