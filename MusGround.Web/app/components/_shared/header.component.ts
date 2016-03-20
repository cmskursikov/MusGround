import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';

@Component({
	selector: 'header',
	directives: [ROUTER_DIRECTIVES, RouterOutlet],
	templateUrl: '/app/templates/_shared/header.html',
	styleUrls: ['app/content/less/_shared/header.css']
})
export class HeaderComponent { }