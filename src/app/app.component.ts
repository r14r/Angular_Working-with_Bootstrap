import { Component } from '@angular/core';

import { HelperService } from './shared/helper/helper.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	private ID = this.constructor.name;
	private helper = new HelperService(this.ID);

	pages = [
		{ link: 'bs/alert', name: 'Alert' },
		{ link: 'bs/badge', name: 'Badge' },
		{ link: 'bs/breadcrumb', name: 'Breadcrumb' },
		{ link: 'bs/button', name: 'Button' },
		{ link: 'bs/buttongroup', name: 'Buttongroup' },
		{ link: 'bs/card', name: 'Card' },
		{ link: 'bs/carousel', name: 'Carousel' },
		{ link: 'bs/close-button', name: 'close-button' },
		{ link: 'bs/collapse', name: 'Collapse' },
		{ link: 'bs/collapse', name: 'collapse' },
		{ link: 'bs/dropdown', name: 'Dropdown' },
		{ link: 'bs/forms', name: 'Forms' },
		{ link: 'bs/input-group', name: 'input-group' },
		{ link: 'bs/jumbotron', name: 'Jumbotron' },
		{ link: 'bs/list-group', name: 'list-group' },
		{ link: 'bs/media', name: 'Media' },
		{ link: 'bs/media', name: 'media' },
		{ link: 'bs/modal', name: 'Modal' },
		{ link: 'bs/nav', name: 'Nav' },
		{ link: 'bs/nav', name: 'nav' },
		{ link: 'bs/navbar', name: 'Navbar' },
		{ link: 'bs/navs', name: 'navs' },
		{ link: 'bs/pagination', name: 'Pagination' },
		{ link: 'bs/popover', name: 'Popover' },
		{ link: 'bs/progress', name: 'Progress' },
		{ link: 'bs/scrollspy', name: 'Scrollspy' },
		{ link: 'bs/scrollspy', name: 'scrollspy' },
		{ link: 'bs/sidemenu', name: 'Sidemenu' },
		{ link: 'bs/spinner', name: 'Spinner' },
		{ link: 'bs/toast', name: 'Toast' },
		{ link: 'bs/tooltip', name: 'Tooltip' },
	];

	constructor() {
		this.helper.log(
			'constructor',
			'setup sidemenu with ' + this.pages.length + ' items',
		);
	}

	onClick(page): void {
		this.helper.log('onClick', 'page=' + JSON.stringify(page));
	}
}
