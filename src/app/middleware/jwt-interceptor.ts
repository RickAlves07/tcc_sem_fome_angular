import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private authenticationService: AuthenticationService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let currentUser: any = this.authenticationService.checkLoggedIn();

		if (currentUser && currentUser.data.token) {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${currentUser.data.token}`,
				}
			});
		}
		console.log(request);
		return next.handle(request);
	}
}
