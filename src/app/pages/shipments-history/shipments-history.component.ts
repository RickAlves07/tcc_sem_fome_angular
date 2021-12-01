import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
	selector: 'app-shipments-history',
	templateUrl: './shipments-history.component.html',
	styleUrls: ['./shipments-history.component.scss']
})
export class ShipmentsHistoryComponent implements OnInit {


	constructor(
		private authenticationService: AuthenticationService,
		private donationsService: DonationsService,
	) { }

	donationsList: any = [];

	ngOnInit(): void {
		this.getDonationsInProgress();
	}

	getDonationsInProgress(){
		this.donationsService.getListDonationsInprogress()
		.subscribe(data => {
			this.donationsList = data;
		});
	}
}
