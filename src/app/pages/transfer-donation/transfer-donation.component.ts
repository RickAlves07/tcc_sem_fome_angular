import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-transfer-donation',
	templateUrl: './transfer-donation.component.html',
	styleUrls: ['./transfer-donation.component.scss']
})
export class TransferDonationComponent implements OnInit {

	constructor(
		private title: Title
	) {
		this.title.setTitle('TCC CC - Inicio')
	}

	ngOnInit(): void {
	}

}
