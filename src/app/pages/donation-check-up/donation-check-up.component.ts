import { DonationPackage } from 'src/app/models/donation-package';
import { NewDonation } from 'src/app/models/new-donation';
import { DonationsService } from './../../services/donations/donations.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Utilities from 'src/app/shared/utils/utilities';
import { DateFormats, emptyArray } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-donation-check-up',
  templateUrl: './donation-check-up.component.html',
  styleUrls: ['./donation-check-up.component.scss']
})
export class DonationCheckUpComponent implements OnInit {

	public newDonation: any;

	public distributorData: any;

	constructor(
		private title: Title,
		private router: Router,
		private donationsService: DonationsService,
	) {
		this.getDonationData();
		this.title.setTitle('TCC CC - Inicio')
	}

	ngOnInit(): void {

	}

	checkIfHasDonation(){

		if(this.newDonation.provisions === undefined || this.newDonation.provisions === emptyArray){
			this.goToNewDonation();
		}
	}

	goToNewDonation(){
		this.router.navigate(['/donations/new']);
	}

	getDonationData(){
		this.newDonation = {...this.donationsService.newDonation}
		this.distributorData = {...this.donationsService.distributorData}
		this.checkIfHasDonation();
	}


	confirmDonation() {
		this.donationsService.saveNewDonation(this.newDonation)
		.subscribe(data => {
			this.router.navigate(['/home']);
		})
	}

	convertDate(dateToConvert: string){
		return Utilities.convertDateToShow(dateToConvert, DateFormats.DateTimeZoneISO);
	}

	convertTime(dateToConvert: string){
		return Utilities.convertTimeToShow(dateToConvert, DateFormats.DateTimeZoneISO);
	}
}
