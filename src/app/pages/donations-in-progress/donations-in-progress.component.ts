import { DonationsService } from './../../services/donations/donations.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations-in-progress',
  templateUrl: './donations-in-progress.component.html',
  styleUrls: ['./donations-in-progress.component.scss']
})
export class DonationsInProgressComponent implements OnInit {

	constructor(
		private authenticationService: AuthenticationService,
		private donationsService: DonationsService
	) { }

	donationsList: any = [];

	ngOnInit(): void {
		this.getDonationsInProgress();
	}

	getDonationsInProgress(){
		this.donationsService.getListDonationsInprogress()
		.subscribe(data => {
			this.donationsList = data;
		})
	}
}
