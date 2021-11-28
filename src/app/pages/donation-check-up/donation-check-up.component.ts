import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-donation-check-up',
  templateUrl: './donation-check-up.component.html',
  styleUrls: ['./donation-check-up.component.scss']
})
export class DonationCheckUpComponent implements OnInit {

  constructor(
	private title: Title) {
		this.title.setTitle('TCC CC - Inicio')
	}


  ngOnInit(): void {
  }

}
