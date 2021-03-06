import { RegisterService } from './../../services/register-service/register.service';
import { emptyString } from './../../shared/utils/constants';
import { Component, Injectable, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserRegister } from 'src/app/models/user-register';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})

@Injectable()
export class SignUpComponent implements OnInit {

	public userRegister: UserRegister = new UserRegister();

	public confirmPassword: string = emptyString;

	public disableRegisterButton: boolean = true;

	private emailsAlreadyInUse = [''];

	public showAlreadyInUse: boolean = false;

	constructor(
		private title: Title,
		private router: Router,
		private registerService: RegisterService,
	) {
		this.title.setTitle('TCC CC - Inicio');
	}

	ngOnInit(): void {

	}

	goToProfileTypeChoice() {
		if(this.validFields()){
			this.registerService.userRegister = {...this.userRegister};
			this.router.navigate(['/register/profile-type-choice'])
		}
	}

	goToLogin() {
		this.router.navigate(['/login']);
	}

	validFields() {
		const minPasswordLength = 3;
		let isValid: boolean = true;
		this.disableRegisterButton = false;
		if(
			this.userRegister.user.email === emptyString ||
			this.userRegister.user.password.trim() === emptyString ||
			this.userRegister.user.password.trim().length < minPasswordLength ||
			this.userRegister.user.password.trim() !== this.confirmPassword.trim()
		)
		{
			isValid = false;
			this.disableRegisterButton = true;
		}
		return isValid;
	}

	checkEmail(){
		this.registerService.checkIfEmailAlreadyRegistered(this.userRegister.user.email)
		.subscribe(
			resp => {
				if(!resp){
					this.goToProfileTypeChoice();
				}
			},
			err => {
				this.emailsAlreadyInUse.push(this.userRegister.user.email)
				this.showAlreadyInUse = true;
		})
	}

	compareEmail(){
		this.showAlreadyInUse = this.emailsAlreadyInUse.includes(this.userRegister.user.email)
	}
}
