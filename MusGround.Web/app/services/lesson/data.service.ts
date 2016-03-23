import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

export class LessonInfo {
    public id: number;
    public name: string;
    public text: string;
    public description: string;
    public isModerated: boolean;
    public prevLessonId: number;
    public nextLessonId: number;

    constructor(lesson?: any) {
        if (lesson) {
            this.id = lesson.id;
            this.name = lesson.name;
            this.text = lesson.text;
            this.description = lesson.description;
            this.isModerated = lesson.isModerated;
            this.prevLessonId = lesson.prevLessonId;
            this.nextLessonId = lesson.nextLessonId;
        }
    }
}

@Injectable()
export class LessonInfoService {
	private _lessonUrl = 'http://api.musground.ru/api/lesson/';

	constructor (private http: Http) { }

	getAllLessonInfo() {
		return this.http.get(this._lessonUrl)
			.map(res => <LessonInfo[]> res.json())
			.catch(this.handleError);
	}
    getLessonInfo(id: number) {
        return this.http.get(this._lessonUrl + id)
            .map(res => <LessonInfo>(res.json()))
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
    toLessonInfo(lesson: any): LessonInfo {
        var newLesson = new LessonInfo();
        newLesson.id = lesson.id;
        newLesson.name = lesson.name;
        newLesson.text = lesson.text;
        newLesson.description = lesson.description;
        newLesson.isModerated = lesson.isModerated;
        newLesson.prevLessonId = lesson.prevLessonId;
        newLesson.nextLessonId = lesson.nextLessonId;
        return newLesson;

    }
}