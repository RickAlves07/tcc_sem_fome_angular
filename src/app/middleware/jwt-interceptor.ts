import { emptyString } from './../shared/utils/constants';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (this.authenticationService.checkLoggedIn()) {
			const token = this.authenticationService.getToken()
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`,
				}
			});
		}
		return next.handle(request);
	}
}
