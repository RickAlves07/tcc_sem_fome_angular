import { Component, Injectable, OnInit } from '@angular/core';
import { HomeButton } from 'src/app/models/home-button';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

	readonly donorProfileButtons: Array<HomeButton> = [
		{
			text: 'Realizar Uma Doação',
			iconClass: '',
			route: 'donation',
		},
		{
			text: 'Doações Realizadas',
			iconClass: '',
			route: 'donation-history',
		},
	];

	readonly transporterProfileButtons: Array<HomeButton> = [
		{
			text: 'Realizar Uma Doação',
			iconClass: '',
			route: 'donation-new',
		},
		{
			text: 'Entregas Realizadas',
			iconClass: '',
			route: 'shipment-history',
		},
		{
			text: 'Doações Aguardando Transporte',
			iconClass: '',
			route: 'donation-available',
		}
	];

	readonly distributorProfileButtons: Array<HomeButton> = [
		{
			text: 'Doações Agendadas',
			iconClass: '',
			route: 'scheduled-donations',
		},
		{
			text: 'Transferir Doações',
			iconClass: '',
			route: 'transfer-donations',
		},
		{
			text: 'Doações Recebidas',
			iconClass: '',
			route: 'donations-received',
		},
	];

	profileButtons: Array<HomeButton> = [];

	constructor() {}

	ngOnInit(): void {

	}

	initProfileTypeButtons() {

	}

	goToPage() {

	}
}
