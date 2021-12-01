import { Component, Input, OnInit } from '@angular/core';
import { DateFormats } from '../../utils/constants';
import Utilities from '../../utils/utilities';

@Component({
  selector: 'app-list-provisions',
  templateUrl: './list-provisions.component.html',
  styleUrls: ['./list-provisions.component.scss']
})
export class ListProvisionsComponent implements OnInit {

	@Input("provisionsList") provisionsList: any = [{}];
	constructor() { }

	ngOnInit(): void {
	}

	convertDate(dateToConvert: string){
		return Utilities.convertDateToShow(dateToConvert, DateFormats.DateTimeZoneISO);
	}
}
