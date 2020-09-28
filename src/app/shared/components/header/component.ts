import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
	selector: 'app-header',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class AppHeaderComponent implements OnInit {
	PREFIX = 'AppHeaderComponent';

	log(module: string, line: string = '') {
		console.log(this.PREFIX + '|' + module + '::' + line);
	}

	constructor() {
		this.log('constructor');
	}

	ngOnInit() {}
}
