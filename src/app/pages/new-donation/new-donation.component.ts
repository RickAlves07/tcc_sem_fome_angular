import { OrganizationService } from './../../services/organization-service/organization.service';
import { DonationsService } from './../../services/donations/donations.service';
import { DateFormats, emptyString } from './../../shared/utils/constants';
import { Provision } from './../../models/provision';
import { Component, OnInit } from '@angular/core';
import { DonationPackage } from 'src/app/models/donation-package';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-donation',
  templateUrl: './new-donation.component.html',
  styleUrls: ['./new-donation.component.scss']
})
export class NewDonationComponent implements OnInit {

	provisions: Provision[] = [new Provision()];
	donation: DonationPackage = new DonationPackage();
	calendarDateString: string[] = [emptyString];
	distributorsList: any;
	distributorSelected: any;


	constructor (
		private title: Title,
		private router: Router,
		private donationsService: DonationsService,
		private organizationService: OrganizationService,
	) {
		this.title.setTitle('TCC CC - Realizar Uma Doação');
		this.getDistributorsList();
	}

	ngOnInit(): void {

	}

	getDistributorsList(){
		this.organizationService.getDistributorsList()
		.subscribe(data => {
			this.distributorsList = data;
		})
	}

	addNewProvision() {
		this.provisions.push(new Provision());
	}

	async donationIsValid() {
		await this.calcProvisionTotalWeight();
		const datesIsValid = this.validateCalendarDates();
		const dataIsValid = this.validateProvisionsData()
		return ( datesIsValid && dataIsValid)
	}

	validateProvisionsData(){
		let isValid: boolean = true;
		this.provisions.forEach((provision: any) => {

			for(let key in provision)
			{
				if(
					(provision[key] === emptyString) ||
					(typeof(provision[key]) === 'number' && provision[key] <= 0)
				){
					isValid = false;
					break;
				}
			}
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

	async confirmDonation(){
		if(await this.donationIsValid()) {
			this.goToCheckUp();
		}
	}

	goToCheckUp(){
		this.donationsService.newDonation = { ...this.donation, provisions: this.provisions}
		this.router.navigateByUrl('/donations/check-up');
	}

	async calcProvisionTotalWeight(){
		for(let i = 0; i < this.provisions.length; i++){
			this.provisions[i].total_weight = (this.provisions[i].unit_weight * this.provisions[i].quantity);
		}
		await this.calcDonationTotalWeightAndItens();
	}

	async calcDonationTotalWeightAndItens(){
		this.donation.total_weight = 0;
		this.donation.total_items = 0;
		for(let i = 0; i < this.provisions.length; i++){
			this.donation.total_weight = this.provisions[i].total_weight;
			this.donation.total_items = this.provisions[i].quantity;
		}
	}
}
