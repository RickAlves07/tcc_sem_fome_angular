import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public loading: boolean = false;

	public error: string = '';

	userLogin = {
		email: '',
		password: '',
	}
	constructor(
		private title: Title,
		private router: Router,
		private authenticationService: AuthenticationService,
	) {
		this.title.setTitle('TCC CC - Login');

		if (this.authenticationService.checkLoggedIn()) {
			this.router.navigate(['/home']);
		}
	}


	ngOnInit(): void {
	}

	login() {
		this.loading = true;
		this.authenticationService.login(this.userLogin)
		.subscribe(

			data => {
				this.authenticationService.setLocalStorage(data);
				this.router.navigate(['/home']);
			},
			error => {
				this.error = error;
				this.loading = false;
			});
	}
}
