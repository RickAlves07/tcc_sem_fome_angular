import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-shipments-history',
	templateUrl: './shipments-history.component.html',
	styleUrls: ['./shipments-history.component.scss']
})
export class ShipmentsHistoryComponent implements OnInit {

	constructor(
		private title: Title
	) {
		this.title.setTitle('TCC CC - Inicio')
	}

	ngOnInit(): void {
	}

}
