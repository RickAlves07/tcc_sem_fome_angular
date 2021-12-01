import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
	selector: 'app-on-the-way-donations',
	templateUrl: './on-the-way-donations.component.html',
	styleUrls: ['./on-the-way-donations.component.scss']
})
export class OnTheWayDonationsComponent implements OnInit {


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
		this.donationsService.getListOnTheWayDonations()
		.subscribe(data => {
			this.donationsList = data;
		})
	}

}
