import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

	private url = environment.apiUrl + '/organizations';

	constructor(
		private http: HttpClient
	) { }

	getDistributorsList(){
		return this.http.get(`${this.url}/list` );
	}
}
