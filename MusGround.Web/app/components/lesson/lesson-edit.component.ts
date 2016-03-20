import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {LessonInfo, LessonInfoService} from '../../../app/services/lesson/data.service';

@Component({
	providers: [LessonInfoService],
	templateUrl: '/app/templates/lesson/lesson-edit.html',
	styleUrls: ['app/content/less/lesson/lesson-edit.css']
})
export class LessonEditComponent implements OnInit {
	lesson: LessonInfo;
	
	constructor(private _router: Router, private _routeParams: RouteParams, private _lessonInfoService: LessonInfoService) { }

	ngOnInit() {
		var id = +this._routeParams.get('id');
		this._lessonInfoService.getLessonInfo(id)
			.subscribe(lesson => this.lesson = lesson);
	}
	gotoLessonList() {
		this._router.navigate(['LessonList']);
	}
	submitChanges() {
		this._lessonInfoService.updateLesson(this.lesson)
			.subscribe(
				hero => this.gotoLessonList(),
				error => alert('error'));
	}
}