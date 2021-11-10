import { TestBed } from '@angular/core/testing';

import { ShipmentsServiceService } from './shipments-service.service';

describe('ShipmentsServiceService', () => {
	let service: ShipmentsServiceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ShipmentsServiceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
