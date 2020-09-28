﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {}

	apiUrl = environment.apiUrl;

	getAll() {
		return this.http.get<User[]>(`${environment.apiUrl}/users`);
	}

	getById(id: number) {
		return this.http.get(`${environment.apiUrl}/users/` + id);
	}

	register(user: User) {
		return this.http.post(`${environment.apiUrl}/users/register`, user);
	}

	update(user: User) {
		return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
	}

	delete(id: number) {
		return this.http.delete(`${environment.apiUrl}/users/` + id);
	}
}
