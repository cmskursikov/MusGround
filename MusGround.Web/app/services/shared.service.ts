import {EventEmitter, Injectable} from 'angular2/core';

@Injectable()
export class SideMenuService {
	lesson: EventEmitter<number> = new EventEmitter();

	constructor() { }

	emitNavChangeEvent(lesson) {
		this.lesson.emit(lesson);
	}
	getNavChangeEmitter() {
		return this.lesson;
	}
}