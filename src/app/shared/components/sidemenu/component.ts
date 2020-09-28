import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class AppSidemenuComponent implements OnInit {
	private ID = 'AppSidemenuComponent';
	private helper = new HelperService(this.ID);

	id: any;

	constructor(public route: ActivatedRoute) {
		this.helper.log('constructor');

		route.params.subscribe(params => {
			this.id = params['id'];
			this.helper.log('constructor', 'param id=' + this.id);
		});
	}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		this.helper.log('ngOnInit', 'param id=' + this.id);
	}
}
