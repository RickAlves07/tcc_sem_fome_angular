import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
	selector: 'app-transfer-donation',
	templateUrl: './transfer-donation.component.html',
	styleUrls: ['./transfer-donation.component.scss']
})
export class TransferDonationComponent implements OnInit {


	constructor(
		private authenticationService: AuthenticationService,
		private title: Title,
		private donationsService: DonationsService
	) {
		this.title.setTitle('TCC CC - Inicio');
	}
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
