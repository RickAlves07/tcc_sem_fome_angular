import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
  selector: 'app-donations-received',
  templateUrl: './donations-received.component.html',
  styleUrls: ['./donations-received.component.scss']
})
export class DonationsReceivedComponent implements OnInit {


	constructor(
		private authenticationService: AuthenticationService,
		private donationsService: DonationsService
	) { }

	donationsList: any = [];

	ngOnInit(): void {
		this.getDonationsInProgress();
	}

	getDonationsInProgress(){
		this.donationsService.getListDonationsReceived()
		.subscribe((data: any) => {
			this.donationsList = data;
		})
	}
}
