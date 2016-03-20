import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LessonInfo, LessonInfoService} from '../../../app/services/lesson/data.service';
import {SideMenuService} from '../../../app/services/shared.service';

@Component({
	providers: [LessonInfoService],
	directives: [ROUTER_DIRECTIVES],
	templateUrl: '/app/templates/lesson/lesson-list.html'
})
export class LessonListComponent implements OnInit {
	lessons: LessonInfo[];
	
	constructor(private _lessonInfoService: LessonInfoService, private sideMenuService: SideMenuService) { }

	ngOnInit() {
		this._lessonInfoService.getAllLessonInfo()
			.subscribe(lessons => {
				this.lessons = lessons;
				var q = 0;
			});
	}
}