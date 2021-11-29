import { emptyString } from './../../shared/utils/constants';
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

	public profileData: {
		profileType: string,
		profileName: string,
		iconClass: string,
	} = {
		profileType: emptyString,
		profileName: emptyString,
		iconClass: emptyString,
	}

	constructor(
		private http: HttpClient,
	) { }

	register(userRegister: UserRegister) {
		return this.http.post(`${this.url}`, userRegister);
	}
}
