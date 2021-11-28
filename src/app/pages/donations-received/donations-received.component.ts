import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-donations-received',
  templateUrl: './donations-received.component.html',
  styleUrls: ['./donations-received.component.scss']
})
export class DonationsReceivedComponent implements OnInit {

  constructor(
	private title: Title) {
		this.title.setTitle('TCC CC - Inicio')
	}


  ngOnInit(): void {
  }

}
