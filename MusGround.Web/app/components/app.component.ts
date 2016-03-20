import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from './_shared/header.component';
import {SideMenuComponent} from './_shared/side-menu.component';
import {LessonComponent} from './lesson/lesson.component';
import {ArticleComponent} from './article/article.component';
import {SideMenuService} from '../../app/services/shared.service';
import {JSONP_PROVIDERS}  from 'angular2/http';

@Component({
	selector: 'musground-app',
	directives: [HeaderComponent, SideMenuComponent, ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS, SideMenuService, JSONP_PROVIDERS],
	templateUrl: '/app/templates/app.html'
})
@RouteConfig([
	{path:'/Lesson/...', name: 'Lesson', component: LessonComponent, useAsDefault: true},
	{path:'/Article/...', name: 'Article', component: ArticleComponent}
])
export class AppComponent { }