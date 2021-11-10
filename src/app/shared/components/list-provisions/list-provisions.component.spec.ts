import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvisionsComponent } from './list-provisions.component';

describe('ListProvisionsComponent', () => {
  let component: ListProvisionsComponent;
  let fixture: ComponentFixture<ListProvisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProvisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProvisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
