import {Component} from 'angular2/core';
import {Router, RouteConfig, RouterOutlet} from 'angular2/router';
import {ArticleListComponent} from './article-list.component';
import {ArticleDetailComponent} from './article-detail.component';

@Component({
	directives: [RouterOutlet],
	template: `
	    <router-outlet></router-outlet>
	`
})
@RouteConfig([
	{path:'/', name: 'ArticleList', component: ArticleListComponent, useAsDefault: true},
	{path:'/:id', name: 'ArticleDetail', component: ArticleDetailComponent},
])
export class ArticleComponent { }