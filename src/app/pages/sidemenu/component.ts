import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
	selector: 'app-sidemenu-left',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class SidemenuPageComponent implements OnInit {
	PREFIX = 'SidemenuPageComponent';

	pages = [
		{ link: 'bootstrap/alert', name: 'Alert' },
		{ link: 'bootstrap/breadcrumb', name: 'Breadcrumb' },
		{ link: 'bootstrap/button', name: 'Button' },
		{ link: 'bootstrap/buttongroup', name: 'Buttongroup' },
		{ link: 'bootstrap/card', name: 'Card' },
		{ link: 'bootstrap/carousel', name: 'Carousel' },
		{ link: 'bootstrap/collapse', name: 'Collapse' },
		{ link: 'bootstrap/dropdown', name: 'Dropdown' },
		{ link: 'bootstrap/forms', name: 'Forms' },
		{ link: 'bootstrap/inputGroup', name: 'InputGroup' },
		{ link: 'bootstrap/jumbotron', name: 'Jumbotron' },
		{ link: 'bootstrap/listGroup', name: 'ListGroup' },
		{ link: 'bootstrap/media', name: 'Media' },
		{ link: 'bootstrap/modal', name: 'Modal' },
		{ link: 'bootstrap/nav', name: 'Nav' },
		{ link: 'bootstrap/navbar', name: 'Navbar' },
		{ link: 'bootstrap/pagination', name: 'Pagination' },
		{ link: 'bootstrap/popover', name: 'Popover' },
		{ link: 'bootstrap/progress', name: 'Progress' },
		{ link: 'bootstrap/scrollspy', name: 'Scrollspy' },
		{ link: 'bootstrap/sidemenu', name: 'Sidemenu' },
		{ link: 'bootstrap/spinner', name: 'Spinner' },
		{ link: 'bootstrap/toast', name: 'Toast' },
		{ link: 'bootstrap/tooltip', name: 'Tooltip' },
	];
	private ID = this.constructor.name;
	private helper = new HelperService(this.ID);

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {}

	onClick(page): void {
		console.log(this.PREFIX + '| onClick: page=' + page);
	}
}
