
import { Component, OnInit } from '@angular/core';
import { profilesTypes, TranslatedProfilesTypes } from 'src/app/shared/utils/constants';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user-register';
import { RegisterService } from 'src/app/services/register-service/register.service';

@Component({
  selector: 'app-profile-type-choice',
  templateUrl: './profile-type-choice.component.html',
  styleUrls: ['./profile-type-choice.component.scss']
})
export class ProfileTypeChoiceComponent implements OnInit {
	readonly profilesItems: Array<ButtonsData> = [
		{
			profileType: profilesTypes.Donor,
			profileName: TranslatedProfilesTypes.donor,
			iconClass: '',
			description: 'Seja um doador e responsável por prover alimentos para intuições de caridade para que possam ajudar pessoas necessitadas.',
			textButton: 'Quero doar alimentos!',
		},
		{
			profileType: profilesTypes.Transporter,
			profileName: TranslatedProfilesTypes.transporter,
			iconClass: '',
			description: 'Seja responsável por coletar e levar os alimentos doados com cuidado ate as instituições encarregadas de distribuir os alimentos. Você também poderá realizar doações a qualquer momento.',
			textButton: 'Quero realizar o Transporte!',
		},
		{
			profileType: profilesTypes.Distributor,
			profileName: TranslatedProfilesTypes.distributor,
			iconClass: '',
			description: 'Receba os alimentos doados e realize a distribuição dos alimentos para as pessoas necessitadas.',
			textButton: 'Quero distribuir os alimentos!',
		},
	];
	public itemToShow: ButtonsData = this.profilesItems[0];

	public userRegister: UserRegister = new UserRegister();

	constructor(
		private title: Title,
		private router: Router,
		private registerService: RegisterService,
	) {
		this.userRegister = { ...this.registerService.userRegister };
		this.title.setTitle('TCC CC - Escolha seu Perfil');
	}

	ngOnInit(): void {
		this.changeTextInfos(profilesTypes.Donor)
	}

	changeTextInfos(profileType: string){
		const item = this.profilesItems.find(item => item.profileType === profileType);
		if(item) {
			this.itemToShow = item;
		}
	}

	goToCompleteRegistration(profileType: string) {
		this.userRegister.user.profile_type = profileType;
		this.registerService.userRegister = { ...this.userRegister };
		this.router.navigate(['/register/complete-registration'])
	}
}

type ButtonsData = {
	profileType: string,
	profileName: string,
	iconClass: string,
	description: string,
	textButton: string,
}
