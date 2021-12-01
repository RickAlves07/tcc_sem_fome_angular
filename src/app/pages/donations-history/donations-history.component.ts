import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { DonationsService } from 'src/app/services/donations/donations.service';

@Component({
  selector: 'app-donations-history',
  templateUrl: './donations-history.component.html',
  styleUrls: ['./donations-history.component.scss']
})
export class DonationsHistoryComponent implements OnInit {

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
		this.donationsService.getListHistory()
		.subscribe(data => {
			this.donationsList = data;
		})
	}
}
