import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user-register';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { RegisterService } from 'src/app/services/register-service/register.service';
import { emptyArray, emptyString, personType } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.scss']
})
export class CompleteRegistrationComponent implements OnInit {

	public personOptions: string[] = Object.values(personType);
	public personSelected: string;
	public userRegister: UserRegister = new UserRegister();
	public profileData:  {
		profileType: string,
		profileName: string,
		iconClass: string,
	} = {
		profileType: emptyString,
		profileName: emptyString,
		iconClass: emptyString,
	}

	public organizationData = {
		name: emptyString,
		cnpj: emptyString,
		email: emptyString,
		phone_number: emptyString,
	}
	constructor(
		private title: Title,
		private router: Router,
		private registerService: RegisterService,
		private authenticationService: AuthenticationService,
	) {
		this.getRegistrationDataType();
		this.verifyIfNeededReturnToFirstPage();

		this.personSelected = this.personOptions[0];
		this.title.setTitle('TCC CC - Complete seu Cadastro');
	}

	verifyIfNeededReturnToFirstPage(){
		if(this.userRegister.user.profile_type === emptyString) {
			this.router.navigate(['register']);
		}
	}

	backToProfileChoice(){
		this.router.navigate(['register/profile-type-choice']);
	}

	getRegistrationDataType(){
		this.userRegister = { ...this.registerService.userRegister };
		this.profileData = { ...this.registerService.profileData };
	}

	ngOnInit(): void {
	}

	enableFieldByPersonSelected(){
		let enable = true;
		if(this.personSelected !== personType.JuridicalPerson)
		{
			enable = false;
		}
		return enable;
	}

	removeRepresentative(index: number){
		this.userRegister.representatives?.splice(index, 1);
	}

	addRepresentative(){
		if(this.userRegister.representatives === undefined)
		{
			this.userRegister.representatives = [{
				name: emptyString,
				email: emptyString,
			}]
		}
		else{
			this.userRegister.representatives?.push({
				name: emptyString,
				email: emptyString,
			});
		}
	}

	validateRegister() {

		const userDataIsValid = this.validateDataFields(this.userRegister.user);
		const addressDataIsValid = this.validateDataFields(this.userRegister.address);
		const organizations = (this.organizationData !== undefined ? this.validateDataFields(this.organizationData) : true);
		const representatives = (this.userRegister.representatives || this.userRegister.representatives !== emptyArray ? this.validateDataFields(this.userRegister.representatives) : true);

		return (userDataIsValid && addressDataIsValid && organizations && representatives);
	}

	validateDataFields(dataObject: any){
		let isValid: boolean = true;
		for(let key in dataObject){
			if(dataObject[key] === undefined || dataObject[key] === null || dataObject[key] === emptyString) {
				isValid = false;
				break;
			}
		}
		return isValid;
	}

	register() {
		if(this.validateRegister()){

			this.clearDataByPersonType();
			this.registerService.register(this.userRegister)
			.subscribe(data => {
				if(data){
					this.authenticationService.goToHome(data)
				}
			})
		}
	}

	clearDataByPersonType(){
		if(this.personSelected === personType.NaturalPerson){
			this.removeDataForNormalPerson();
		}
	}

	initOrganization(){
		this.organizationData = {
			name: emptyString,
			cnpj: emptyString,
			email: emptyString,
			phone_number: emptyString,
		}
	}

	removeDataForNormalPerson(){
		this.userRegister.organization = undefined;
		this.userRegister.representatives = undefined;
	}
}
