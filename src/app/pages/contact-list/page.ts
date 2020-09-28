import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-contact-list',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class ContactListComponent implements OnInit {
	contacts;
	selectedContact;

	constructor(public dataService: DataService) {}

	ngOnInit() {
		this.contacts = this.dataService.getContacts();
	}
	public selectContact(contact) {
		this.selectedContact = contact;
	}
}
