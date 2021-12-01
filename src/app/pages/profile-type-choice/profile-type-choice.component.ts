
import { Component, OnInit } from '@angular/core';
import { emptyString, profilesTypes, profileTypeIcon, translatedProfilesTypes } from 'src/app/shared/utils/constants';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user-register';
import { RegisterService } from 'src/app/services/register-service/register.service';
import { ButtonsProfileChoiceData } from 'src/app/models/button-profile-choice-data';

@Component({
  selector: 'app-profile-type-choice',
  templateUrl: './profile-type-choice.component.html',
  styleUrls: ['./profile-type-choice.component.scss']
})
export class ProfileTypeChoiceComponent implements OnInit {
	readonly profilesItems: Array<ButtonsProfileChoiceData> = [
		{
			iconClass: profileTypeIcon.Donor,
			profileType: profilesTypes.Donor,
			profileName: translatedProfilesTypes.donor,
			description: 'Seja um doador e responsável por prover alimentos para intuições de caridade para que possam ajudar pessoas necessitadas.',
			textButton: 'Quero doar alimentos!',
		},
		{
			iconClass: profileTypeIcon.Transporter,
			profileType: profilesTypes.Transporter,
			profileName: translatedProfilesTypes.transporter,
			description: 'Seja responsável por coletar e levar os alimentos doados com cuidado ate as instituições encarregadas de distribuir os alimentos. Você também poderá realizar doações a qualquer momento.',
			textButton: 'Quero realizar o Transporte!',
		},
		{
			iconClass: profileTypeIcon.Distributor,
			profileType: profilesTypes.Distributor,
			profileName: translatedProfilesTypes.distributor,
			description: 'Receba os alimentos doados e realize a distribuição dos alimentos para as pessoas necessitadas.',
			textButton: 'Quero distribuir os alimentos!',
		},
	];
	public itemToShow: ButtonsProfileChoiceData = this.profilesItems[0];

	public userRegister: UserRegister = new UserRegister();

	constructor(
		private title: Title,
		private router: Router,
		private registerService: RegisterService,
	) {
		this.title.setTitle('TCC CC - Escolha seu Perfil');
	}

	ngOnInit(): void {
		this.getRegistrationDataType();
		this.verifyIfNeededReturnToFirstPage();
	}

	changeTextInfos(profileType: string){
		const item = this.profilesItems.find(item => item.profileType === profileType);
		if(item) {
			this.itemToShow = item;
		}
	}

	verifyIfNeededReturnToFirstPage(){
		if(this.userRegister.user.email === emptyString) {
			this.router.navigate(['register']);
		}
	}

	goToCompleteRegistration(profileType: string) {
		this.userRegister.user.profile_type = profileType;
		this.setRegistrationDataType();
		this.router.navigate(['/register/complete-registration']);
	}

	setRegistrationDataType(){
		this.registerService.userRegister = { ...this.userRegister };
		this.registerService.profileData = { ...this.itemToShow };
	}

	getRegistrationDataType(){
		this.userRegister =  {...this.registerService.userRegister };
	}
}
