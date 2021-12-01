import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
  selector: 'app-shipments-in-progress',
  templateUrl: './shipments-in-progress.component.html',
  styleUrls: ['./shipments-in-progress.component.scss']
})
export class ShipmentsInProgressComponent implements OnInit {
	constructor(
		private authenticationService: AuthenticationService,
		private donationsService: DonationsService,
	) { }

	donationsList: any = [];

	ngOnInit(): void {
		this.getDonationsInProgress();
	}

	getDonationsInProgress(){
		this.donationsService.getListShipmentInProgress()
		.subscribe((data: any) => {
			this.donationsList = data;
		});
	}
}
