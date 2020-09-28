import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/helper/helper.service';

@Component({
	// tslint:disable-next-line: component-selector
	selector: 'bs-sidemenu',
	templateUrl: './component.html',
	styleUrls: ['./component.scss'],
})
export class BootstrapSidemenuComponent implements OnInit {
	private ID = 'BootstrapSidemenuComponent';
	private helper = new HelperService(this.ID);

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

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');
	}

	onReady() {
		/*
        $('#sidebarCollapse').on('click', () => {
            $('#sidebar').toggleClass('active');
        });
        */
	}

	onClick(page): void {
		this.helper.log('onClick', 'page=' + JSON.stringify(page));
	}
}
