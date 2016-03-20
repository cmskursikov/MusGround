import {Injectable} from 'angular2/core';

export class ArticleInfo {
	constructor(
		public id: number,
		public name: string,
		public text: string,
		public isModerated: boolean
	) { }
}

@Injectable()
export class ArticleInfoService {
	getAllArticleInfo() {
		return ARTICLE_INFO;
	}
	getArticleInfo(id: number) {
		return ARTICLE_INFO.filter(h => h.id === id)[0];
	}
}

var ARTICLE_INFO = [
	new ArticleInfo(1, 'First article', 'First article text', true),
	new ArticleInfo(2, 'Second article', 'Second article text', true),
	new ArticleInfo(3, 'Third article', 'Third article text', false),
	new ArticleInfo(4, 'Fourth article', 'Fourth article text', true),
	new ArticleInfo(5, 'Fifth article', 'Fifth article text', false)
];