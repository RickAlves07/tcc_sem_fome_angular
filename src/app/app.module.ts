import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { NewDonationComponent } from './pages/new-donation/new-donation.component';
import { DonationsHistoryComponent } from './pages/donations-history/donations-history.component';
import { ShipmentsHistoryComponent } from './pages/shipments-history/shipments-history.component';
import { AvailableDonationsComponent } from './pages/available-donations/available-donations.component';
import { OnTheWayDonationsComponent } from './pages/on-the-way-donations/on-the-way-donations.component';
import { DonationsReceivedComponent } from './pages/donations-received/donations-received.component';
import { TransferDonationComponent } from './pages/transfer-donation/transfer-donation.component';
import { ListDonationsComponent } from './shared/components/list-donations/list-donations.component';
import { ListProvisionsComponent } from './shared/components/list-provisions/list-provisions.component';
import { ListShipmentsComponent } from './shared/components/list-shipments/list-shipments.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DonationCheckUpComponent } from './pages/donation-check-up/donation-check-up.component';
import { ShipmentTimelineComponent } from './shared/components/shipment-timeline/shipment-timeline.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtInterceptor } from './middleware/jwt-interceptor';
import { ErrorInterceptor } from './middleware/error-interceptor';
import { CompleteRegistrationComponent } from './pages/complete-registration/complete-registration/complete-registration.component';
import { ProfileTypeChoiceComponent } from './pages/profile-type-choice/profile-type-choice.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SignUpComponent,
		HomeComponent,
		PaginationComponent,
		NewDonationComponent,
		DonationsHistoryComponent,
		ShipmentsHistoryComponent,
		AvailableDonationsComponent,
		OnTheWayDonationsComponent,
		DonationsReceivedComponent,
		TransferDonationComponent,
		ListDonationsComponent,
		ListProvisionsComponent,
		ListShipmentsComponent,
		HeaderComponent,
		FooterComponent,
		NotFoundComponent,
		DonationCheckUpComponent,
		ShipmentTimelineComponent,
		ProfileTypeChoiceComponent,
		CompleteRegistrationComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		CommonModule,
		NgSelectModule,
	],
	providers: [
		JwtInterceptor,
		ErrorInterceptor
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
