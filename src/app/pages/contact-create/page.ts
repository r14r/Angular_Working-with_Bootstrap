import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-contact-create',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class ContactCreateComponent implements OnInit {
	contact: { id; name; description; email } = {
		id: null,
		name: '',
		description: '',
		email: '',
	};

	constructor(public dataService: DataService) {}

	ngOnInit() {}

	createContact() {
		console.log(this.contact);
		this.dataService.createContact(this.contact);
		this.contact = { id: null, name: '', description: '', email: '' };
	}
}
