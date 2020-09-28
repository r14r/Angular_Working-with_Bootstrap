/*
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
*/
export class HelperService {
	PREFIX = 'HelperService';

	constructor(private module: string) {
		this.PREFIX = module;
	}

	log(func: string, line: string = '') {
		console.log(this.PREFIX + '|' + func + '::' + line);
	}
}
