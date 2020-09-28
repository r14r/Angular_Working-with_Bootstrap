import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './auth-services/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../user/service/user.service';
import { AuthGuard } from './guards/authguard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
	],
	exports: [LoginComponent, RegisterComponent],
	providers: [AuthGuard, AuthenticationService, UserService],
})
export class AuthModule {}
