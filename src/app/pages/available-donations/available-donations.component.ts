import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-available-donations',
  templateUrl: './available-donations.component.html',
  styleUrls: ['./available-donations.component.scss']
})
export class AvailableDonationsComponent implements OnInit {

  constructor(
	private title: Title) {
		this.title.setTitle('TCC CC - Doações Aguardando Transporte')
	}

  ngOnInit(): void {
  }

}
