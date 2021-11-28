import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ShipmentsService {
	private url = environment.apiUrl + '/shipments';

	constructor(private http: HttpClient) { }

	startNewTransport(data: any){
		return this.http.post(`${this.url}/new`, data);
	}
}
