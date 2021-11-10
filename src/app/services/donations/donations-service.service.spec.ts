import { TestBed } from '@angular/core/testing';

import { DonationsService } from './donations-service.service';

describe('DonationsServiceService', () => {
	let service: DonationsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DonationsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
