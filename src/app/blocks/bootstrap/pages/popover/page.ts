import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
	selector: 'app-bs-popover',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class BootstrapPopoverPageComponent implements OnInit {
	private ID = this.constructor.name;
	private helper = new HelperService(this.ID);

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {}
}