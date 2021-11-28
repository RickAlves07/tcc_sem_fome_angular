import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTypeChoiceComponent } from './profile-type-choice.component';

describe('ProfileTypeChoiceComponent', () => {
  let component: ProfileTypeChoiceComponent;
  let fixture: ComponentFixture<ProfileTypeChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTypeChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTypeChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
