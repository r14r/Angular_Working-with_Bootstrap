import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
	// tslint:disable-next-line: component-selector
	selector: 'bs-alert',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class BootstrapAlertComponent implements OnInit {
	private ID = this.constructor.name;
	private helper = new HelperService(this.ID);

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {}
}
