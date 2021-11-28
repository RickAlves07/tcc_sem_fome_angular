import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/user-register';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
	private url = environment.apiUrl + '/register';
	public userRegister: UserRegister = new UserRegister();
	constructor(
		private http: HttpClient,
		private router: Router,
		private authenticationService: AuthenticationService,
	) { }

	register() {
		return this.http.post(`${this.url}`, this.userRegister);
	}
}
