import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'bs-jumbotron',
    templateUrl: './component.html',
    styleUrls: ['./component.scss'],
})
export class BootstrapJumbotronComponent implements OnInit {
    PREFIX = 'BootstrapJumbotronComponent';

    @Input() content: string;
    @Input('master') masterName: string;

    constructor() {
        console.log(this.PREFIX + '| constructor');
    }

    ngOnInit() {
        console.log(this.PREFIX + '| ngOnInit');
    }
}
