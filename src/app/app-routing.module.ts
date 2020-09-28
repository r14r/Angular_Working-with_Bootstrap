import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomePageComponent } from './pages/home/page';
import { DemoPageComponent } from './pages/demo/page';
import { SidemenuPageComponent } from './pages/sidemenu/component';

import { ContactCreateComponent } from './pages/contact-create/page';
import { ContactListComponent } from './pages/contact-list/page';

import { BootstrapAlbumPageComponent } from './blocks/bootstrap/pages/album/page';
import { BootstrapAlertPageComponent } from './blocks/bootstrap/pages/alert/page';
import { BootstrapBadgeComponent } from './blocks/bootstrap/components/badge/component';
import { BootstrapBreadcrumbPageComponent } from './blocks/bootstrap/pages/breadcrumb/page';
import { BootstrapButtongroupPageComponent } from './blocks/bootstrap/pages/buttongroup/page';
import { BootstrapButtonPageComponent } from './blocks/bootstrap/pages/button/page';
import { BootstrapCardPageComponent } from './blocks/bootstrap/pages/card/page';
import { BootstrapCarouselPageComponent } from './blocks/bootstrap/pages/carousel/page';
import { BootstrapCollapsePageComponent } from './blocks/bootstrap/pages/collapse/page';
import { BootstrapDropdownPageComponent } from './blocks/bootstrap/pages/dropdown/page';
import { BootstrapFormsPageComponent } from './blocks/bootstrap/pages/forms/page';
import { BootstrapInputGroupPageComponent } from './blocks/bootstrap/pages/input-group/page';
import { BootstrapJumbotronPageComponent } from './blocks/bootstrap/pages/jumbotron/page';
import { BootstrapListGroupPageComponent } from './blocks/bootstrap/pages/list-group/page';
import { BootstrapMediaPageComponent } from './blocks/bootstrap/pages/media/page';
import { BootstrapModalPageComponent } from './blocks/bootstrap/pages/modal/page';
import { BootstrapNavbarPageComponent } from './blocks/bootstrap/pages/navbar/page';
import { BootstrapNavPageComponent } from './blocks/bootstrap/pages/nav/page';
import { BootstrapPaginationPageComponent } from './blocks/bootstrap/pages/pagination/page';
import { BootstrapPopoverPageComponent } from './blocks/bootstrap/pages/popover/page';
import { BootstrapProgressPageComponent } from './blocks/bootstrap/pages/progress/page';
import { BootstrapScrollspyPageComponent } from './blocks/bootstrap/pages/scrollspy/page';
import { BootstrapSidemenuPageComponent } from './blocks/bootstrap/pages/sidemenu/page';
import { BootstrapSpinnerPageComponent } from './blocks/bootstrap/pages/spinner/page';
import { BootstrapToastPageComponent } from './blocks/bootstrap/pages/toast/page';
import { BootstrapTooltipPageComponent } from './blocks/bootstrap/pages/tooltip/page';

import { HelperService } from './shared/helper/helper.service';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },

	{ path: 'home', component: HomePageComponent },
	{ path: 'demo', component: DemoPageComponent },
	{ path: 'contact-create', component: ContactCreateComponent },
	{ path: 'contact-list', component: ContactListComponent },
	{ path: 'album', component: BootstrapAlbumPageComponent },
	{ path: 'sidemenu', component: SidemenuPageComponent },
	{ path: 'bs/alert', component: BootstrapAlertPageComponent },
	{ path: 'bs/badge', component: BootstrapBadgeComponent },
	{ path: 'bs/breadcrumb', component: BootstrapBreadcrumbPageComponent },
	{ path: 'bs/button', component: BootstrapButtonPageComponent },
	{ path: 'bs/buttongroup', component: BootstrapButtongroupPageComponent },
	{ path: 'bs/card', component: BootstrapCardPageComponent },
	{ path: 'bs/carousel', component: BootstrapCarouselPageComponent },
	{ path: 'bs/collapse', component: BootstrapCollapsePageComponent },
	{ path: 'bs/dropdown', component: BootstrapDropdownPageComponent },
	{ path: 'bs/forms', component: BootstrapFormsPageComponent },
	{ path: 'bs/inputGroup', component: BootstrapInputGroupPageComponent },
	{ path: 'bs/jumbotron', component: BootstrapJumbotronPageComponent },
	{ path: 'bs/listGroup', component: BootstrapListGroupPageComponent },
	{ path: 'bs/media', component: BootstrapMediaPageComponent },
	{ path: 'bs/modal', component: BootstrapModalPageComponent },
	{ path: 'bs/nav', component: BootstrapNavPageComponent },
	{ path: 'bs/navbar', component: BootstrapNavbarPageComponent },
	{ path: 'bs/pagination', component: BootstrapPaginationPageComponent },
	{ path: 'bs/popover', component: BootstrapPopoverPageComponent },
	{ path: 'bs/progress', component: BootstrapProgressPageComponent },
	{ path: 'bs/scrollspy', component: BootstrapScrollspyPageComponent },
	{ path: 'bs/sidemenu', component: BootstrapSidemenuPageComponent },
	{ path: 'bs/spinner', component: BootstrapSpinnerPageComponent },
	{ path: 'bs/toast', component: BootstrapToastPageComponent },
	{ path: 'bs/tooltip', component: BootstrapTooltipPageComponent },

	{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];

const options: ExtraOptions = {
	useHash: true,
	enableTracing: false,
};

@NgModule({
	imports: [RouterModule.forRoot(routes, options)],
	exports: [RouterModule],
})
export class AppRoutingModule {
	private ID = this.constructor.name;
	private helper = new HelperService(this.ID);

	constructor() {
		this.helper.log('constructor');
	}
}
