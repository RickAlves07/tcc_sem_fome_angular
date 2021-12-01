import { emptyString } from './../../shared/utils/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from 'src/app/models/user-register';
import { environment } from 'src/environments/environment';
import { ButtonsProfileChoiceData } from 'src/app/models/button-profile-choice-data';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

	private readonly headerPostOptions: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

	private url = environment.apiUrl + '/register';
	public userRegister: UserRegister = new UserRegister();

	public profileData: ButtonsProfileChoiceData = {
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

	checkIfEmailAlreadyRegistered(email: string){
		return this.http.post(`${this.url}/check`, { email: email }, {headers: this.headerPostOptions});
	}
}
