import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheWayDonationsComponent } from './on-the-way-donations.component';

describe('OnTheWayDonationsComponent', () => {
	let component: OnTheWayDonationsComponent;
	let fixture: ComponentFixture<OnTheWayDonationsComponent>;

	beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ OnTheWayDonationsComponent ]
	})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(OnTheWayDonationsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
