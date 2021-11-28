import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-on-the-way-donations',
	templateUrl: './on-the-way-donations.component.html',
	styleUrls: ['./on-the-way-donations.component.scss']
})
export class OnTheWayDonationsComponent implements OnInit {

	constructor(
		private title: Title
	) {
		this.title.setTitle('TCC CC - Inicio')
	}

	ngOnInit(): void {
	}

}
