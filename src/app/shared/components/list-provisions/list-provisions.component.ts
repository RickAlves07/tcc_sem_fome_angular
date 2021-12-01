import { Component, Input, OnInit } from '@angular/core';

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

}
