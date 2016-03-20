import {Component, OnInit, OnDestroy, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';
import {SideMenuService} from '../../../app/services/shared.service';
import {LessonInfo} from '../../../app/services/lesson/data.service';
import {ArticleInfo} from '../../../app/services/article/article.service';

@Component({
	selector: 'side-menu',
	templateUrl: 'app/templates/_shared/side-menu.html',
	styleUrls: ['app/content/styles/_shared/side-menu.css'] 
})
export class SideMenuComponent implements OnInit, OnDestroy {
	curObject: any;
	subscription: any;

	constructor(private _router: Router, public sideMenuService: SideMenuService) { }

	ngOnInit() {
		this.subscription = this.sideMenuService.getNavChangeEmitter()
			.subscribe(obj => this.selectedNavItem(obj));
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	selectedNavItem(obj: any) {
		this.curObject = obj;
	}
	gotoPrevLesson() {
		this._router.navigate(['Lesson', 'LessonDetail', { id: this.curObject.prevLessonId }]);
	}
	gotoNextLesson() {
		this._router.navigate(['Lesson', 'LessonDetail', { id: this.curObject.nextLessonId }]);
	}
	saveChanges() {
		alert('All changes has been saved.');
	}
	getType(obj) {
		if (obj instanceof LessonInfo) {
			return 1;
		} else if (obj instanceof ArticleInfo) {
			return 2;
		}
	}
}