import { profilesTypes } from 'src/app/shared/utils/constants';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import { HomeButton } from 'src/app/models/home-button';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

	readonly donorProfileButtons: Array<HomeButton> = [
		{
			text: 'Nova Doação',
			iconClass: '',
			route: 'donations/new',
		},
		{
			text: 'Doações em Progresso',
			iconClass: '',
			route: 'donations/in-progress',
		},
		{
			text: 'Doações Realizadas',
			iconClass: '',
			route: 'donations/history',
		},
	];

	readonly transporterProfileButtons: Array<HomeButton> = [
		{
			text: 'Doações Aguardando Transporte',
			iconClass: '',
			route: 'donations/available',
		},
		{
			text: 'Entregas em Progresso',
			iconClass: '',
			route: 'shipments/history',
		},
		{
			text: 'Entregas Realizadas',
			iconClass: '',
			route: 'shipments/history',
		},
		{
			text: 'Nova Doação',
			iconClass: '',
			route: 'donation/new',
		},
		{
			text: 'Doações Realizadas',
			iconClass: '',
			route: 'donations/history',
		},
	];

	readonly distributorProfileButtons: Array<HomeButton> = [
		{
			text: 'Doações a Caminho',
			iconClass: '',
			route: 'donations/on-the-way',
		},
		{
			text: 'Transferências em Progresso',
			iconClass: '',
			route: 'donations/transfer/in-progress',
		},
		{
			text: 'Transferir Alimentos',
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

	constructor(
		private router: Router,
		private title: Title,
		private authenticationService: AuthenticationService
	) {
		this.title.setTitle('TCC CC - Inicio')
	}

	ngOnInit(): void {
		this.initProfileTypeButtons()
	}

	initProfileTypeButtons() {
		debugger
		const profileUser = this.authenticationService.getProfileType();

		const buttonsMap = {
			[profilesTypes.Donor]: this.donorProfileButtons,
			[profilesTypes.Transporter]: this.transporterProfileButtons,
			[profilesTypes.Distributor]: this.distributorProfileButtons,
		}

		this.profileButtons = buttonsMap[String(profileUser)]
	}

	goToPage(pagePath: string) {
		this.router.navigateByUrl(pagePath);
	}
}
