import { DonationPackage } from 'src/app/models/donation-package';
import { NewDonation } from 'src/app/models/new-donation';
import { DonationsService } from './../../services/donations/donations.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-check-up',
  templateUrl: './donation-check-up.component.html',
  styleUrls: ['./donation-check-up.component.scss']
})
export class DonationCheckUpComponent implements OnInit {

	public newDonation: NewDonation = new DonationPackage()

	public distributorData: any;

	constructor(
		private title: Title,
		private router: Router,
		private donationsService: DonationsService,
	) {
		this.getDonationData()
		this.title.setTitle('TCC CC - Inicio')
	}

	ngOnInit(): void {

	}

	getDonationData(){
		this.newDonation = {...this.donationsService.newDonation}
	}

	confirmDonation() {
		this.donationsService.saveNewDonation(this.newDonation)
		.subscribe(data =>{
			this.router.navigate(['/home']);
		})
	}
}
