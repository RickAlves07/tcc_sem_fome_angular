import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfosComponent } from './profile-infos.component';

describe('ProfileInfosComponent', () => {
  let component: ProfileInfosComponent;
  let fixture: ComponentFixture<ProfileInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
