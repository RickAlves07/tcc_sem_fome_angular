import { Router } from '@angular/router';
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
			route: 'donations/new',
		},
		{
			text: 'Doações Realizadas',
			iconClass: '',
			route: 'donations/history',
		},
	];

	readonly transporterProfileButtons: Array<HomeButton> = [
		{
			text: 'Realizar Uma Doação',
			iconClass: '',
			route: 'donation/new',
		},
		{
			text: 'Entregas Realizadas',
			iconClass: '',
			route: 'shipments/history',
		},
		{
			text: 'Doações Aguardando Transporte',
			iconClass: '',
			route: 'donations/available',
		}
	];

	readonly distributorProfileButtons: Array<HomeButton> = [
		{
			text: 'Doações Agendadas',
			iconClass: '',
			route: 'donations/scheduled',
		},
		{
			text: 'Transferir Doações',
			iconClass: '',
			route: 'donations/transfer',
		},
		{
			text: 'Doações Recebidas',
			iconClass: '',
			route: 'donations/received',
		},
	];

	profileButtons: Array<HomeButton> = [];

	constructor(private router: Router) {}

	ngOnInit(): void {
		this.initProfileTypeButtons()
	}

	initProfileTypeButtons() {
		this.profileButtons = this.distributorProfileButtons;
	}

	goToPage(pagePath: string) {
		this.router.navigateByUrl(pagePath);
	}
}
