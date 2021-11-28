import { DateFormats, emptyString } from './../../shared/utils/constants';
import { Provision } from './../../models/provision';
import { Component, OnInit } from '@angular/core';
import { DonationPackage } from 'src/app/models/donation-package';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-new-donation',
  templateUrl: './new-donation.component.html',
  styleUrls: ['./new-donation.component.scss']
})
export class NewDonationComponent implements OnInit {

	provisions: Provision[] = [new Provision()];

	donation: DonationPackage = new DonationPackage();

	calendarDateString: string[] = [''];

	constructor (
		private title: Title,
		private router: Router,

	) {
		this.title.setTitle('TCC CC - Realizar Uma Doação');
	}

	ngOnInit(): void {

	}

	addNewProvision() {
		this.provisions.push(new Provision());
	}

	donationIsValid() {
		const datesIsValid = this.validateCalendarDates();
		const dataIsValid = this.validateProvisionsData()
		return ( datesIsValid && dataIsValid)
	}

	validateProvisionsData(){
		const today = moment().startOf('day').format(DateFormats.DateOnlyDefaultFormat);
		let isValid: boolean = false;
		this.provisions.forEach(provision => {
			isValid = (provision.description !== emptyString && provision.quantity !== 0 && provision.unit_weight !== 0 &&	provision.total_weight !== 0);
		});
		return isValid
	}

	validateCalendarDates(){
		const isValid = this.calendarDateString.every(date => date !== emptyString);

		if(isValid){
			this.fillProvisionExpirationDate(this.calendarDateString);
		}
		return isValid
	}

	fillProvisionExpirationDate(dates: string[]){
		for(let index in dates) {
			this.provisions[index].expiration_date = dates[index];
		}
	}

	confirmDonation(){
		if(this.donationIsValid()) {
			this.goToCheckUp();
		}
	}

	goToCheckUp(){
		this.router.navigateByUrl('/donations/check-up');
	}
}
