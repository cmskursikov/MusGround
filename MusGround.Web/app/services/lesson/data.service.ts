import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

export class LessonInfo {
	constructor(
		public id: number,
		public name: string,
		public text: string,
		public description: string,
		public isModerated: boolean,
		public nextLessonId: number,
		public prevLessonId: number
	) { }
}

@Injectable()
export class LessonInfoService {
	private _lessonUrl = 'api.musground/api/lesson/';

	constructor (private http: Http) { }

	getAllLessonInfo() {
		return this.http.get(this._lessonUrl)
			.map(res => <LessonInfo[]> res.json())
			.catch(this.handleError);
	}
	getLessonInfo(id: number) {
		return this.http.get(this._lessonUrl + id)
			.map(res => <LessonInfo> res.json())
			.catch(this.handleError);
    }
    updateLesson(lesson: LessonInfo): Observable<Response> {
		let body = JSON.stringify(lesson);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.put(this._lessonUrl + lesson.id, body, options)
			.catch(this.handleError)
	}
	private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}

var LESSON_INFO = [
	new LessonInfo(1, 'First lesson', 'First lesson text', 'First lesson description', true, 2, null),
	new LessonInfo(2, 'Second lesson', 'Second lesson text', 'Second lesson description', true, 3, 1),
	new LessonInfo(3, 'Third lesson', 'Third lesson text', 'Third lesson description', false, 4, 2),
	new LessonInfo(4, 'Fourth lesson', 'Fourth lesson text', 'Fourth lesson description', true, 5, 3),
	new LessonInfo(5, 'Fifth lesson', 'Fifth lesson text', 'Fifth lesson description', false, null, 4)
];