import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
  selector: 'app-available-donations',
  templateUrl: './available-donations.component.html',
  styleUrls: ['./available-donations.component.scss']
})
export class AvailableDonationsComponent implements OnInit {

	constructor(
		private authenticationService: AuthenticationService,
		private title: Title,
		private donationsService: DonationsService
	) {
		this.title.setTitle('TCC CC - Aguardando Transporte')
	}

	donationsList: any = [];

	ngOnInit(): void {
		this.getDonationsInProgress();
	}

	getDonationsInProgress(){
		this.donationsService.getListAvailableToShip()
		.subscribe(data => {
			this.donationsList = data;
		})
	}
}
