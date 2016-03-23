import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {LessonInfo, LessonInfoService} from '../../../app/services/lesson/data.service';
import {SideMenuService} from '../../../app/services/shared.service';

@Component({
	providers: [LessonInfoService],
	templateUrl: '/app/templates/lesson/lesson-detail.html'
})
export class LessonDetailComponent implements OnInit, OnDestroy {
    lesson: LessonInfo;
	

    constructor(private _routeParams: RouteParams, private _lessonInfoService: LessonInfoService, private sideMenuService: SideMenuService) {
        this.lesson = new LessonInfo();
    }

	ngOnInit() {
        var id: number = +this._routeParams.get('id');
        var self = this;
		this._lessonInfoService.getLessonInfo(id)
            .subscribe(lesson => {
                self.lesson = self._lessonInfoService.toLessonInfo(lesson);
                this.sideMenuService.emitNavChangeEvent(self.lesson);
            });
        this.sideMenuService.emitNavChangeEvent(this.lesson);
	}
	ngOnDestroy() {
		this.sideMenuService.emitNavChangeEvent(null);
	}
}