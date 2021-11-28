import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user-register';
import { RegisterService } from 'src/app/services/register-service/register.service';

@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.scss']
})
export class CompleteRegistrationComponent implements OnInit {

	public userRegister: UserRegister = new UserRegister();

	constructor(
		private title: Title,
		private router: Router,
		private registerService: RegisterService,
	) {
		this.userRegister = { ...this.registerService.userRegister };
		this.title.setTitle('TCC CC - Complete seu Cadastro');
	}

	ngOnInit(): void {

	}

}
