import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
	selector: 'bs-modal',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class BootstrapModalComponent implements OnInit {
	private ID = this.constructor.name;
	private helper = new HelperService(this.ID);

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {}
}
