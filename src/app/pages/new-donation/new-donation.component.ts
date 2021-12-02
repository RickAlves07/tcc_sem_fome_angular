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
	disableProceedButton: boolean = true;

	schedule = {
		date: emptyString,
		time: emptyString,
	}


	constructor (
		private title: Title,
		private router: Router,
		private donationsService: DonationsService,
		private organizationService: OrganizationService,
	) {
		this.title.setTitle('TCC CC - Nova Doação');
		this.getDistributorsList();
	}

	ngOnInit(): void {
		this.getDonationDataToTransfer();
	}

	getDonationDataToTransfer(){
debugger
		this.donation = {...this.donationsService.newDonation};
		this.provisions = this.donation.provisions;
		for(let i in this.provisions){
			this.provisions[i].id = undefined;
		}
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
		const datesIsValid = this.validateProvisionExpirationDates();
		const dataIsValid = this.validateProvisionsData()
		const organizationValid = (this.donation.organization_distributor_id !== undefined ? true : false);
		const scheduledIsValid = this.validateScheduledDateTime();
		const allValid = (datesIsValid && dataIsValid && organizationValid && scheduledIsValid);
		this.disableProceedButton = allValid ? false : true;
		return allValid;
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

	validateScheduledDateTime()
	{
		return (this.donation.scheduled_at !== null && this.donation.scheduled_at > new Date() ? true : false)
	}

	setScheduleDateTime(){
		if(this.schedule.date !== emptyString && this.schedule.time !== emptyString){
			const date = `${this.schedule.date} ${this.schedule.time}`;
			this.donation.scheduled_at = new Date(date);
		}
	}

	validateProvisionExpirationDates(){
		const isValid = this.calendarDateString.every(date => date !== emptyString);

		if(isValid){
			this.setProvisionExpirationDate(this.calendarDateString);
		}
		return isValid;
	}

	removeDonationItem(index: number){
		this.provisions.splice(index, 1);
		this.calendarDateString.splice(index, 1);
	}

	setProvisionExpirationDate(dates: string[]){
		for(let index in dates) {
			this.provisions[index].expiration_date = new Date(dates[index]);
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

	setDonationDistributorId(){
		this.donation.organization_distributor_id = this.distributorSelected.id;
		this.setDonationData();
	}

	setDonationData(){
		this.donationsService.newDonation = {...this.donation };
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
