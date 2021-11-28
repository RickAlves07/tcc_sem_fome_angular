import { emptyString } from './../../shared/utils/constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

	private readonly headerPostOptions: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
	private url = environment.apiUrl + '/login';
	constructor(
		private http: HttpClient,
		private router: Router,) {
	}

	async canActivate(route: any, state: any) {
		const hasLocalStorage = await this.checkLoggedIn();
		if (hasLocalStorage) {
			return true;
		}

		this.router.navigate(['/']);
		return false;
	}

	login(userLogin: {}){
		return this.http.post(`${this.url}`, userLogin, {headers: this.headerPostOptions});
	}

	logout() {
		this.removeLocalStorage()
	}

	checkLoggedIn() {
		const verifyIfHasData = localStorage.getItem('token') || '';
		if(verifyIfHasData === emptyString){
			return false;
		}
		return true;
	}

	async setLocalStorage(userData: any){

		localStorage.setItem('userName', JSON.stringify(userData.userName));
		localStorage.setItem('profileType', JSON.stringify(userData.profileType));
		localStorage.setItem('organizationName', JSON.stringify(userData.organizationName));
		localStorage.setItem('token', JSON.stringify(userData.token));
	}

	private removeLocalStorage(){
		localStorage.removeItem('name');
		localStorage.removeItem('profile_type');
		localStorage.removeItem('organization_name');
		localStorage.removeItem('token');
	}
}
