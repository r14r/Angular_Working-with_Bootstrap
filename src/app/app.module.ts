import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './shared/components/header/component';
import { AppFooterComponent } from './shared/components/footer/component';
import { AppSidemenuComponent } from './shared/components/sidemenu/component';
import { AppPlaceholderComponent } from './shared/components/placeholder/component';

import { HomePageComponent } from './pages/home/page';
import { DemoPageComponent } from './pages/demo/page';

import { HelperService } from './shared/helper/helper.service';

// import { AppBootstrapModule } from './app-bootstrap.module';
import { ContactCreateComponent } from './pages/contact-create/page';
import { ContactListComponent } from './pages/contact-list/page';

import { SidemenuPageComponent } from './pages/sidemenu/component';

import { BootstrapAlbumPageComponent } from './blocks/bootstrap/pages/album/page';
import { BootstrapAlertComponent } from './blocks/bootstrap/components/alert/component';
import { BootstrapAlertPageComponent } from './blocks/bootstrap/pages/alert/page';
import { BootstrapBadgeComponent } from './blocks/bootstrap/components/badge/component';
import { BootstrapBreadcrumbComponent } from './blocks/bootstrap/components/breadcrumb/component';
import { BootstrapBreadcrumbPageComponent } from './blocks/bootstrap/pages/breadcrumb/page';
import { BootstrapButtonComponent } from './blocks/bootstrap/components/button/component';
import { BootstrapButtongroupComponent } from './blocks/bootstrap/components/buttongroup/component';
import { BootstrapButtongroupPageComponent } from './blocks/bootstrap/pages/buttongroup/page';
import { BootstrapButtonPageComponent } from './blocks/bootstrap/pages/button/page';
import { BootstrapCardComponent } from './blocks/bootstrap/components/card/component';
import { BootstrapCardPageComponent } from './blocks/bootstrap/pages/card/page';
import { BootstrapCarouselComponent } from './blocks/bootstrap/components/carousel/component';
import { BootstrapCarouselPageComponent } from './blocks/bootstrap/pages/carousel/page';
import { BootstrapCollapseComponent } from './blocks/bootstrap/components/collapse/component';
import { BootstrapCollapsePageComponent } from './blocks/bootstrap/pages/collapse/page';
import { BootstrapDropdownComponent } from './blocks/bootstrap/components/dropdown/component';
import { BootstrapDropdownPageComponent } from './blocks/bootstrap/pages/dropdown/page';
import { BootstrapFormsComponent } from './blocks/bootstrap/components/forms/component';
import { BootstrapFormsPageComponent } from './blocks/bootstrap/pages/forms/page';
import { BootstrapInputGroupComponent } from './blocks/bootstrap/components/input-group/component';
import { BootstrapInputGroupPageComponent } from './blocks/bootstrap/pages/input-group/page';
import { BootstrapJumbotronComponent } from './blocks/bootstrap/components/jumbotron/component';
import { BootstrapJumbotronPageComponent } from './blocks/bootstrap/pages/jumbotron/page';
import { BootstrapListGroupComponent } from './blocks/bootstrap/components/list-group/component';
import { BootstrapListGroupPageComponent } from './blocks/bootstrap/pages/list-group/page';
import { BootstrapMediaComponent } from './blocks/bootstrap/components/media/component';
import { BootstrapMediaPageComponent } from './blocks/bootstrap/pages/media/page';
import { BootstrapModalComponent } from './blocks/bootstrap/components/modal/component';
import { BootstrapModalPageComponent } from './blocks/bootstrap/pages/modal/page';
import { BootstrapNavbarComponent } from './blocks/bootstrap/components/navbar/component';
import { BootstrapNavbarPageComponent } from './blocks/bootstrap/pages/navbar/page';
import { BootstrapNavComponent } from './blocks/bootstrap/components/nav/component';
import { BootstrapNavPageComponent } from './blocks/bootstrap/pages/nav/page';
import { BootstrapPaginationComponent } from './blocks/bootstrap/components/pagination/component';
import { BootstrapPaginationPageComponent } from './blocks/bootstrap/pages/pagination/page';
import { BootstrapPopoverComponent } from './blocks/bootstrap/components/popover/component';
import { BootstrapPopoverPageComponent } from './blocks/bootstrap/pages/popover/page';
import { BootstrapProgressComponent } from './blocks/bootstrap/components/progress/component';
import { BootstrapProgressPageComponent } from './blocks/bootstrap/pages/progress/page';
import { BootstrapScrollspyComponent } from './blocks/bootstrap/components/scrollspy/component';
import { BootstrapScrollspyPageComponent } from './blocks/bootstrap/pages/scrollspy/page';
import { BootstrapSidemenuComponent } from './blocks/bootstrap/components/sidemenu/component';
import { BootstrapSidemenuPageComponent } from './blocks/bootstrap/pages/sidemenu/page';
import { BootstrapSpinnerComponent } from './blocks/bootstrap/components/spinner/component';
import { BootstrapSpinnerPageComponent } from './blocks/bootstrap/pages/spinner/page';
import { BootstrapToastComponent } from './blocks/bootstrap/components/toast/component';
import { BootstrapToastPageComponent } from './blocks/bootstrap/pages/toast/page';
import { BootstrapTooltipComponent } from './blocks/bootstrap/components/tooltip/component';
import { BootstrapTooltipPageComponent } from './blocks/bootstrap/pages/tooltip/page';

import { ResumeComponent } from './blocks/bootstrap/templates/resume/resume.component';
import { AgencyComponent } from './blocks/bootstrap/templates/agency/agency.component';
import { BareComponent } from './blocks/bootstrap/templates/bare/bare.component';
import { BlogHomeComponent } from './blocks/bootstrap/templates/blog-home/blog-home.component';
import { BlogPostComponent } from './blocks/bootstrap/templates/blog-post/blog-post.component';
import { BusinessCasualComponent } from './blocks/bootstrap/templates/business-casual/business-casual.component';
import { BusinessFrontpageComponent } from './blocks/bootstrap/templates/business-frontpage/business-frontpage.component';
import { CleanBlogComponent } from './blocks/bootstrap/templates/clean-blog/clean-blog.component';
import { CreativeComponent } from './blocks/bootstrap/templates/creative/creative.component';
import { FreelancerComponent } from './blocks/bootstrap/templates/freelancer/freelancer.component';
import { FullWidthPicsComponent } from './blocks/bootstrap/templates/full-width-pics/full-width-pics.component';
import { GrayscaleComponent } from './blocks/bootstrap/templates/grayscale/grayscale.component';
import { HeroicFeaturesComponent } from './blocks/bootstrap/templates/heroic-features/heroic-features.component';
import { LandingPageComponent } from './blocks/bootstrap/templates/landing-page/landing-page.component';
import { ModernBusinessComponent } from './blocks/bootstrap/templates/modern-business/modern-business.component';
import { NewAgeComponent } from './blocks/bootstrap/templates/new-age/new-age.component';
import { OnePageWonderComponent } from './blocks/bootstrap/templates/one-page-wonder/one-page-wonder.component';
import { SbAdminComponent } from './blocks/bootstrap/templates/sb-admin/sb-admin.component';
import { ScrollingNavComponent } from './blocks/bootstrap/templates/scrolling-nav/scrolling-nav.component';
import { ShopHomepageComponent } from './blocks/bootstrap/templates/shop-homepage/shop-homepage.component';
import { SimpleSidebarComponent } from './blocks/bootstrap/templates/simple-sidebar/simple-sidebar.component';
import { SmallBusinessComponent } from './blocks/bootstrap/templates/small-business/small-business.component';
import { StartbootstrapComponent } from './blocks/bootstrap/templates/startbootstrap/startbootstrap.component';
import { StylishPortfolioComponent } from './blocks/bootstrap/templates/stylish-portfolio/stylish-portfolio.component';
import { TheBigPictureComponent } from './blocks/bootstrap/templates/the-big-picture/the-big-picture.component';

@NgModule({
	declarations: [
		AppComponent,
		AppHeaderComponent,
		AppFooterComponent,
		AppSidemenuComponent,
		AppPlaceholderComponent,

		HomePageComponent,
		DemoPageComponent,
		ContactCreateComponent,
		ContactListComponent,

		// Bootstrap Components
		BootstrapAlertComponent,
		BootstrapBadgeComponent,
		BootstrapBreadcrumbComponent,
		BootstrapButtonComponent,
		BootstrapButtongroupComponent,
		BootstrapCardComponent,
		BootstrapCarouselComponent,
		BootstrapCollapseComponent,
		BootstrapDropdownComponent,
		BootstrapFormsComponent,
		BootstrapInputGroupComponent,
		BootstrapJumbotronComponent,
		BootstrapJumbotronComponent,
		BootstrapListGroupComponent,
		BootstrapMediaComponent,
		BootstrapModalComponent,
		BootstrapNavbarComponent,
		BootstrapNavComponent,
		BootstrapPaginationComponent,
		BootstrapPopoverComponent,
		BootstrapProgressComponent,
		BootstrapScrollspyComponent,
		BootstrapSidemenuComponent,
		BootstrapSpinnerComponent,
		BootstrapToastComponent,
		BootstrapTooltipComponent,

		// Bootstrap pages
		SidemenuPageComponent,

		BootstrapAlertPageComponent,
		BootstrapAlbumPageComponent,
		BootstrapBreadcrumbPageComponent,
		BootstrapButtonPageComponent,
		BootstrapButtongroupPageComponent,
		BootstrapCardPageComponent,
		BootstrapCarouselPageComponent,
		BootstrapCollapsePageComponent,
		BootstrapDropdownPageComponent,
		BootstrapFormsPageComponent,
		BootstrapInputGroupPageComponent,
		BootstrapJumbotronPageComponent,
		BootstrapListGroupPageComponent,
		BootstrapMediaPageComponent,
		BootstrapModalPageComponent,
		BootstrapNavPageComponent,
		BootstrapNavbarPageComponent,
		BootstrapPaginationPageComponent,
		BootstrapPopoverPageComponent,
		BootstrapProgressPageComponent,
		BootstrapScrollspyPageComponent,
		BootstrapSidemenuPageComponent,
		BootstrapSpinnerPageComponent,
		BootstrapToastPageComponent,
		BootstrapTooltipPageComponent,
		ResumeComponent,
		AgencyComponent,
		BareComponent,
		BlogHomeComponent,
		BlogPostComponent,
		BusinessCasualComponent,
		BusinessFrontpageComponent,
		CleanBlogComponent,
		CreativeComponent,
		FreelancerComponent,
		FullWidthPicsComponent,
		GrayscaleComponent,
		HeroicFeaturesComponent,
		LandingPageComponent,
		ModernBusinessComponent,
		NewAgeComponent,
		OnePageWonderComponent,
		SbAdminComponent,
		ScrollingNavComponent,
		ShopHomepageComponent,
		SimpleSidebarComponent,
		SmallBusinessComponent,
		StartbootstrapComponent,
		StylishPortfolioComponent,
		TheBigPictureComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
	],
	entryComponents: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	private ID = this.constructor.name;
	private helper = new HelperService(this.ID);

	constructor() {
		this.helper.log('constructor');
	}
}
