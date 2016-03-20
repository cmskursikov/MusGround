import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {LessonListComponent} from './lesson-list.component';
import {LessonDetailComponent} from './lesson-detail.component';
import {LessonEditComponent} from './lesson-edit.component';

@Component({
	directives: [RouterOutlet],
	template: `
	    <router-outlet></router-outlet>
	`
})
@RouteConfig([
	{path:'/', name: 'LessonList', component: LessonListComponent, useAsDefault: true},
	{path:'/:id', name: 'LessonDetail', component: LessonDetailComponent},
	{path:'/:id/edit', name: 'LessonEdit', component: LessonEditComponent}
])
export class LessonComponent { }